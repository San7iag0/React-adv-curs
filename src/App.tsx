import { useState } from 'react'
import './App.css'
import Goal from './components/Goal/Goal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Goal />
    </>
  )
}

export default App
