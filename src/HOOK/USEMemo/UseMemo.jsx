import React,{ useState,useMemo } from "react"

const UseMemo = () => {
    const [count, setcount] = useState(1)
    const [data, setdata] = useState("Avik")
    //In React, memoization is a technique that can be used to optimize the performance of a component by avoiding unnecessary re-renders.
    //useMemo is a React Hook that lets you cache the result of a calculation between re-renders,so that can optimize the performance.
    const user= useMemo(() => {
        return(
            <>
                <h1 className="text-info">hello buddies {count} {data}</h1>
                <h1 className="text-danger">hello Guys</h1>
                <h1 className="text-warning">hello React</h1>
            </>
        )
    }, [data])
  return (
    <>
        <h1>hello world</h1>
        {user}
        <h1>{count}</h1>
        <h1>{data}</h1>
        <button onClick={()=>{setcount(count+1)}}>click</button>
        <button onClick={()=>{setdata("Abhishek")}}>click</button>
    </>
  )
}

export default UseMemo