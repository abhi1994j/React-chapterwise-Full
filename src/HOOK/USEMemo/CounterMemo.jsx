import React, { useMemo, useState } from 'react'

const CounterMemo = () => {
    const initialState={
        num:9,
        num1:78,
        result:""
    }
    const [Adding, setAdding] = useState(1)
    const [count, setCount] = useState(0)
    const [state, setState] = useState(initialState)
    
        const newUpdate = useMemo(() => console.log("Abhishek"), [Adding])
  return (
   <>
    <div>CounterMemo</div>
    <h1>{Adding}</h1>
    <h1>{count}</h1>
    <h1>{state.result}</h1>
    <button onClick={()=>setAdding(Adding*4)}>Add</button>
    <button onClick={()=>setCount(count+1)}>counting</button>
    <button onClick={()=>setState({...state,result:state.num+state.num1})}>click</button>
    </>
  )
}

export default CounterMemo