import React,{useState,useEffect} from 'react'

const LifeCycle = () => {
    console.log("hello React")
const [Data, setData] = useState("Avik")
const [Count, setCount] = useState(1)
useEffect(()=>{
    console.log(Math.random());//ComponentDidMount
},[Count])//ComponentDidUpdate
    return (
    <>
        <h1>life-cycle method</h1>
        {console.log("hello guys")}
        <h1>{Data}</h1>
        <h1>{Count}</h1>
        <button onClick={()=>{setData('Abhishek')}}>click</button> 
        <button onClick={()=>{setCount(Count+1)}}>click it</button> 
    </>
  )
}

export default LifeCycle;