import React from 'react'
import './StartGame.css'
import dice from '../assets/1.png'

const StartGame = ({Toggle}) => {
  return (
<span>
  <div>
    <img src={dice} alt="" />
    </div>
    <div>
      <h1 className='heading'>Dice Game</h1>
      <button onClick={Toggle}>Play Now</button>
    </div>
    </span>
  )
}

export default StartGame