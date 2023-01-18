import React from 'react'
import Even from '../OddEven/Even';
import Odd from '../OddEven/Odd';


export default function NumCheck({num1}){
    const num=num1;
  return (
    <> { num % 2 === 0 ? <Even/> : <Odd/> } </>
  )
}