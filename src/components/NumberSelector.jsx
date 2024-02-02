import React, { useState } from 'react'
import './NumberSelector.css'

const NumberSelector = () => {

    const arrNumber = [1,2,3,4,5,6];
    const [selectNumber,setSelectedNumber] = useState('')
console.log(selectNumber);
  return (
     <div>
    {arrNumber.map((value , index) => (
    <span key={index} onClick={()=> setSelectedNumber(value)}>{value}</span>
       ))}       
       
    </div>
  )
}

export default NumberSelector