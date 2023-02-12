import React,{useState} from 'react'

export default function DefineStates() {
let [data,setData]=useState("Raju")// destructring
//let [data,setData]=useState(0)
//let data="raju"
function updateData(){
    setData("Aditi") //rerender use setData 
    //setData(data+1)
    //data="Aditi"
    //alert(data)
}
  return (
    <div>
      <h1>on click function using state in functional component</h1>
      <h1>{data}</h1>
      <button onClick={updateData}>click me</button>
    </div>
  )
}
