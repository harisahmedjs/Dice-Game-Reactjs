import { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'



const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(true)

  const TogglePlay = ()=>{
    setIsGameStarted ((prev) => !prev)
  }

  return (
<>{isGameStarted ? <GamePlay /> : <StartGame Toggle={TogglePlay} />}</>
    )
}

export default App

