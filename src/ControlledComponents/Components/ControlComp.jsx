import React, { useState } from 'react'

const ControlComp = () => {
    const [data, setdata] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Controlled by States in Component");
    }
  return (
    <>
        <h1>"Controlled by States in Component"</h1>
       <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <input className="mr-4" type="text" value={data} onChange={(e)=>{setdata(e.target.value)}} /><br/><br/>
        <input className="bg bg-success" type="submit" />
       </form>
    </>
  )
}

export default ControlComp;