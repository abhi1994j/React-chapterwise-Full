import React from 'react'
import { useState } from 'react'
export default function HOCbasic() {
  return (
    <>
      <h1>React high order component</h1>
      {/* <Hoc1 />
      <Hoc1 /> */}
      <HocFinal cmp={Hoc1}/>
      <HocGreen cmp={Hoc2}/>
      <HocBlue cmp={Hoc1}/>

    </>
  )
}
function HocFinal(props){
  return <h2 style={{background:'red',width:'300px'}}>RED<props.cmp/></h2>
}
function HocGreen(props){
  return <h2 style={{background:'green',width:'300px'}}>GREEN<props.cmp/></h2>  
}
function HocBlue(props){
  return <h2 style={{background:'blue',width:'300px'}}>BLUE<props.cmp/></h2>  
}
function Hoc1(){
  const [count,setCount]=useState(0)
  return (
    <div>     
      <h2>{count}</h2>
      <button onClick={()=>{setCount(count+1)}}>Update-count</button>
    </div>
  )
}
function Hoc2(){
  return (
    <div>     
      <h2>Hello world</h2>
    </div>
  )
}


