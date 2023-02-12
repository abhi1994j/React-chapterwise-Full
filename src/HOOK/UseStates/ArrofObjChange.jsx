import React, {useState} from 'react'

export default function ArrofObjChange() {
    const [obj,setobj]=useState([{name:"Abhishek",gender:"Male",age:89},{name:"Priyanka",gender:"Female",age:98},{name:"Debanjan",gender:"male",age:90}]);
    function Changefunc1(e){
      e.preventDefault();
      setobj([{...obj,name:"Ashok",gender:"Male",age:80}])
    }
  return (
    <>
        <h1>name is: {obj[0].name}</h1>
        <h1>gender is: {obj[0].gender}</h1>
        <h1>age is :{obj[0].age}</h1>
        <button onClick={Changefunc1}>change it</button>
    </>
  )
}
