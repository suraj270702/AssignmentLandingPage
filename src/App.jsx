import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        
      <Layout />
      
    </>
  )
}

export default App
