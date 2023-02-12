import React,{useState,useMemo} from 'react'
export const DepenMemo = () => {
    const [count,setCount]=useState(0)
    const [item,setItem]=useState(10)
   const Update=useMemo(function countMemo(){
        console.log('Abhishek');
        return count +10;
    },[count])
    return (
    <>
    <h1>UseMemo demo</h1>
    <h1>Count:{count}</h1>
    <h1>Item:{item}</h1>
    <h2>{Update}</h2>
    <button onClick={()=>setCount(count+1)}>count it</button>
    <button onClick={()=>setItem(item*5)}>click it</button>
    </>
  )
}
