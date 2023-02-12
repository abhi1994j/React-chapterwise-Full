import { useState } from "react";
export const NameChange=()=>{
    const [Count,setCount]=useState(false);
    const [Data,setData]=useState(null);
    function getData(val){
        setData(val.target.value);
    }
    return (
    <>
    {Count?<h1>{Data}</h1>:null}
    <input type="text" onChange={getData} />
    <button onClick={()=>setCount(true)}>click me!</button>
    </>
    );
}