import { useState } from 'react'
import { ChatBox } from './ChatBox'
import { Contacts } from './Contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex h-screen">
      <Contacts />
      <ChatBox />
    </div>
      
    </>
  )
}

export default App
