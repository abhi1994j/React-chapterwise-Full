import {useState} from 'react'

export default function ObjChange() {
    const [obj,setobj]=useState({name:"Abhishek",gender:"Male",age:89});
    function Changefunc1(){
        setobj({...obj,name:"Ashok"})
    }
  return (
    <>
        <h1>name is: {obj.name}</h1>
        <button onClick={Changefunc1}>change it</button>
    </>
  )
}
