import {useState} from 'react'

export default function Changecolor() {
    const [color,setcolor]=useState("blue")
    function shoot(){
        setcolor("red")
    }
  return (
    <>
        <h1 style={{color}}>Abhishek</h1>
        <button onClick={shoot}>click me</button>
    </>
  )
}