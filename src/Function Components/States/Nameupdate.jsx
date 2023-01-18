import React,{useState} from 'react'
//The state is a built-in React object in Class Component that is used to contain data or information about the component. 
const Nameupdate = (props) => {
    const [name, setname] = useState("Avik")
    const [Data, setData] = useState("Avinash")
    const [Count, setCount] = useState(1)
    
    //Pass a function using props {props.func}
  return (
    <>      
      <div className="d-flex justify-content-center">
        <h1 className='text-center mr-4'>{name}</h1>
        <h1 className='text-center mr-4'>{Count}</h1>
        <h1 className='text-center mr-4'>{Data}</h1>
        <button className='btn btn-info mr-2' onClick={()=>setname(props.value)}>click</button> 
        <button className='btn btn-info mr-2' onClick={()=>setCount(Count+1)}>click</button> 
        <button className='btn btn-info mr-2' onClick={()=>setData("Babui")}>click</button> 
        <button className='btn btn-danger' onClick={props.func}>click</button>  
      </div>
    </>
  )
}

export default Nameupdate ;