import React, { useState } from 'react'
import ReactMemo from './ReactMemo'

export default function MemoBasic() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(100)
  return (
    <div>
      <h1>Memo in react using count {count}</h1>
      <ReactMemo data={data}/>

      <button onClick={()=>setCount(count+1)}>Update </button>
    </div>
  )
}
