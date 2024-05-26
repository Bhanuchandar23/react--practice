import { useState } from 'react'
import './App.css'

function App() {

  //let Counter =1
  const [Counter,setCounter]  = useState(1)
  const addValues =() =>{
    setCounter(Counter+1)

  }
  const removeValue =( ) =>{
    setCounter(Counter-1)
  }

  return (
    <div>
      <h1> A SIMPLE REACT COUNTER APP </h1>
      <h2> when you click addValue button count increase if you click RemoveValue it reduce count </h2>
      <h2> Counter Values :{Counter}</h2>
      <button onClick={addValues}>Add values: {Counter}</button> {" " }
      <button onClick ={removeValue}>remove value</button>
      <p>footer: {Counter}</p>
    </div>
  )
}

export default App
