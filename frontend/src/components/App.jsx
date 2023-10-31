import { useEffect, useState } from 'react'
import { ChatBox } from './ChatBox'
import { Contacts } from './Contacts'
import { socket } from '../../sockets/handleSocket';


function App() {
  const [text, setText] = useState("");
  const [textString, setTextString] = useState([]);
  const [receivedText,setReceivedText]  = useState([]);
  

  useEffect(()=>{
    socket
  },[]);
  
  // useEffect(() => {
    
  // },[] );
  
  socket.on("pass-message", (text) => {
    const timestamp = Date.now(); // Get the current timestamp
    setReceivedText([...receivedText,{ date: timestamp, text: text }]);      
  });  
  
  // const receivedText = [
  //   "Hello!",
  //   "How's it going?",
  //   "Any plans for today?",
  //   "Good to see you!",
  //   "Let's chat!",
  // ];
  


  //This function set the text state when user types it
  function handleChange(event){
    setText(event.target.value);
    
  }

  function onSend(text) {
    const timestamp = Date.now(); // Get the current timestamp
    setTextString([...textString, { date: timestamp, text: text }]);
    socket.emit("send-text", text);
    setText("");
  }
  return (
    <>
    <div className="flex h-screen">
      <Contacts />
      <ChatBox receivedText={receivedText} textList={textString} onChange={handleChange} value={text} onSend={onSend} />
      
    </div>
      
    </>
  )
}

export default App
