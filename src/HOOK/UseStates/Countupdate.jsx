import React,{useState} from 'react'

const Countupdate = () => {
    const [data,setData]=useState(4)
    const [count,setCount]=useState(1)
  return (
    <>
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={()=>setData(data+1)}>Increment</button>
        <button onClick={()=>setData(data-1)}>Decrement</button>
        <button onClick={()=>setData(data*2)}>Multiply</button>
        <button onClick={()=>setData(data/2)}>Divide</button>
        <button onClick={()=>setCount(count+1)}>Increment1</button>
    </>
  )
}
export default Countupdate;

