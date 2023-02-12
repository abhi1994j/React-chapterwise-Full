import React,{useEffect, useState,useRef} from 'react'

const RefExample = () => {
    const [Data, setData] = useState('')
    const inputElem=useRef('')
    const count = useRef(6)
    const obj={
        name:"Abhishek",
        age:35
    }
    const arr=[1,2,3,5]
    console.log(count);
    useEffect(() => {
      setData(Data+1)
        count.current=count.current+1;
      console.log(count)
    },[]);
    const handleClick=()=>{
        console.log(inputElem.current)
        inputElem.current.style.backgroundColor="aqua"
    }
  return (
    <>
        <h1>{count.current}</h1>
        <h1>{obj.name}</h1>
        {/* <h1>{arr}</h1> */}
         <input type="text" ref={inputElem} value={Data} onChange={(e)=>{setData(e.target.value)}} /> 
        <button onClick={handleClick}>Submit</button> 
    </>
  )
}

export default RefExample