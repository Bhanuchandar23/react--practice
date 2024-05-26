import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement  = {
    
    type:'a',
    Props: {
        href:"https://google.com",
        target: '_blank',
    },
    children: "Click me hear run google"

}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
)
