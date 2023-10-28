import { useState } from 'react'
import { ChatBox } from './ChatBox'
import { Contacts } from './Contacts'
import { io } from 'socket.io-client';



function App() {
  const [text, setText] = useState("");
  const [textString, setTextString] = useState([]);
  

  const socket = io('http://localhost:3000',{ transports : ['websocket'] });

  //This function set the text state when user types it
  function handleChange(event){
    setText(event.target.value);
    
  }

  function onSend(text){
    setTextString((prev)=>{
      return([...prev,text]);
    })   
  }
  return (
    <>
    <div className="flex h-screen">
      <Contacts />
      <ChatBox textList={textString} onChange={handleChange} value={text} onSend={onSend} />
      
    </div>
      
    </>
  )
}

export default App
