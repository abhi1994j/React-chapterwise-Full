
import React, { useRef } from 'react'
//useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

//Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

const UncontrolComp = () => {
    const setRef = useRef('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Controlled by DOM in Component using useRef hook");
    }
  return (
    <>
        <h1>"Controlled by DOM in Component using useRef hook"</h1>
       <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <input className="mr-4" type="text" ref={setRef} /><br/><br/>
        <input className="bg bg-danger" type="submit" />
       </form>
    </>
  )
}

export default UncontrolComp;