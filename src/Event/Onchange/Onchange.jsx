import React ,{useState}from 'react'
function Onchange() {
const [data,setData]=useState('')
const [print,setPrint]=useState(false)

  function getData(e)
  {
    console.warn(e.target.value)
    setData(e.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
     {
       print?
       <h1> {data}</h1>
       :null
     }
    <input type="text" value={data} onChange={getData} />
    <button onClick={()=>setPrint(true)} >Print Data</button>
    </div>
  );
}

export default Onchange;