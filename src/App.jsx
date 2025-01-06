

import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import GamePage from './components/GamePage'

function App() {
  const[isGameStarted,setIsGameStarted]=useState(false)
  const toggleGame = () => {
    setIsGameStarted((prev)=> !prev)
  }

  return (
    <>
    {
      isGameStarted ? <GamePage/> :<Hero
      toggleGame={toggleGame}/>
    }
    
    </>
  )
}

export default App
