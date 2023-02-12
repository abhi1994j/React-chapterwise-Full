import React from 'react'
import "../Inline.css"
export default function InlineCss() {
  const myCss = {
    padding: "20px",
    border: "2px solid black",
    textAlign: "center",   
  }
  
  return (
    <>
        <div className=' container-fluid d-flex justify-content-center p-4 col-sm-12'>
            <h1 className='bg bg-info text-light text-uppercase font-weight-bold mr-2 ' style={myCss}>"Hello world"</h1>
            <h1 className='mr-2 p-4 font-weight-light' style={{background:"Red",border: "2px solid black",textAlign: "center" }}>Hello guys</h1>
            <h1 className='bg bg-primary text-danger text-lowercase font-italic mr-2' style={myCss}>"Hello Abhishek"</h1>
            <h1 id='Abcss'>Hello End</h1>
        </div>
     
    </>
  )
}
