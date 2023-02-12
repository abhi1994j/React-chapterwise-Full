 import React from 'react'
 
 const Cssprops = (props) => {
// In React, props (short for "properties") are used to pass data from a parent component to a child component. They are passed as attributes to the JSX elements in the child component, and can be accessed inside the component using the props object. Props are read-only, which means that the child component cannot modify the props passed to it.
// //Pass a function using props {props.func} 
 return (
     <>
      <h1 style={props.style}>Hello World Abhishek</h1>
      <button className='btn btn-danger' onClick={props.func}>click</button>  
      <button className='btn btn-secondary' onClick={()=>props.func()}>call function</button>  
     </>
   )
 }
 export default Cssprops

       