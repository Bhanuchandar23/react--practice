import { useState } from 'react'
import reactLogo from './assets/react.svg'

import'./index.css'
import './App.css'

function App() {
  const [Color, setColor] = useState('pink')
  function ChangeColor(Color){
      setColor(Color)
  }

  return (
    <>
        
     <div className ='w-full  h-screen duration-200' style={{backgroundColor:Color}}   >
      <div className ='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className ='flex-wrap gap-3 shadow-lg justify-center bg-white px-3 py-22 rounded-3xl' >
          <button  onClick= {() => ChangeColor('red')}   style={{backgroundColor:"red"}} 
           className ='outline-none px-4 py-1 rounded-full shadow-lg text-black'>red </button>{ " "}
          <button onClick = {() =>ChangeColor('blue')} style={{backgroundColor:"blue"}} className ='outline-none px-4 py-1 rounded-full shadow-lg text-black'>blue</button>{" "}
          <button  onClick = {() =>ChangeColor('green')} style={{backgroundColor:"green"}} className ='outline-none px-4 py-1 rounded-full shadow-lg text-black'>green </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
