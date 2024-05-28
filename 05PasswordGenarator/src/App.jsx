import { useCallback, useState,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]= useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const[charAllowed,setCharAllowed]= useState(false)
  const[password,setPassword]= useState('')
  const passwordRef =useRef()

   const generatePassword = useCallback( ( )=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if (numberAllowed) str += "0123456789"
     if (charAllowed) str += "!@#%^&*()_+"


     for( let i=1;i<length ;i++){
        const char =Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
     }
     setPassword(pass)
   },[length,numberAllowed,charAllowed] )


   useEffect( ( ) =>{
    generatePassword()

   }, [length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = ( ) =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }


   

  return (
    
    <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-3  justify-center fixed  bg-gray-800  text-orange-500 ' >
      <h1 className='text-3xl font-bold mb-2  text-center my-3 '>Password Generator </h1>
      <div className='flex shadow  rounded-lg overflow-hidden mb-4'>
        <input type ="text"
        value = { password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref = {passwordRef}
        />
        <button className='outline-none bg-blue-500 text-black px-3 py-0.5 shrink-0  rounded-md'   onClick = {copyPasswordToClipboard} >copy</button>
      </div>
      <div  className='flex text-sm gap-2'>
        <span className='flex item-center gap-x-1'>
          <input type ='range'  name =" "  id=" " min={6} max={100} value={length} className='cursor-pointer' onChange={ (e) => setLength(  e.target.value)} />
                  
          <label htmlFor="length">length:{length}</label>
        

        </span>
        <span className='flex item-center gap-x-1'>
          <input type ='checkbox'  name =" "  id=" " defaultChecked ={charAllowed} onChange={ (e) => setCharAllowed ((prev) => !prev) } />
                  
          <label htmlFor="character">characters</label>

        </span>
        <span className='flex item-center gap-x-1'>
          <input type ='checkbox'  name =" "  id=" " defaultChecked ={numberAllowed} onChange={ (e) => setNumberAllowed ((prev) => !prev) } />
                  
          <label htmlFor="number">Number</label>

        </span>
        
        

      </div>
      

      

      
    </div>
    

  )
}

export default App
