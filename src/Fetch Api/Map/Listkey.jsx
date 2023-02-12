import React from 'react'

export default function ListKey() {
  // using list
   const numbers = ['Home','About','menu','contact','login','register'];
  
 const updatedNums = numbers.map((number)=>{

     return <li> {number}</li>;
 });

//key using list
const name=['raju','kayal','hello','hoi'];
const updateName=name.map((names,index)=>{
  return <li>Key:{index} {names}</li>
});
  return (
    <div>
      {/* <h1>Rendering the list in component</h1> */}
      <h1>rendering keyList in react js</h1>
      {/* <h1>{updatedNums}</h1> */}
      <h1>{updateName}</h1>
    </div>
  )
}
