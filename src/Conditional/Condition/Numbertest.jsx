import React from 'react'
import Even from '../OddEven/Even';
import Odd from '../OddEven/Odd';

const Numbertest = () => {
    const x = 5;
  return (
    <>
           { x % 2 ==0 ? <Even number ={x} /> : <Odd number ={x} /> }
    </>
  )
}

export default Numbertest