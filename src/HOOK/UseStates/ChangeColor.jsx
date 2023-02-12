import React from 'react'
import { useState } from 'react'

export default function ChangeColor() {
    const[color,setColor]=useState('RED')
  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <button style={{backgroundColor:"Blue"}} type="button" onClick={() => setColor("blue")}>Blue</button>
      <button style={{backgroundColor:"Red"}} type="button" onClick={() => setColor("red")}>Red</button>
      <button style={{backgroundColor:"Pink"}} type="button" onClick={() => setColor("pink")}>Pink</button>
      <button style={{backgroundColor:"Green"}} type="button" onClick={() => setColor("green")}>Green</button>
    </div>
  )
}
