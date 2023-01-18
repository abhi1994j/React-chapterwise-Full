import React from 'react'
import WithoutProp from './Props/WithoutProp'
import Nameupdate from './States/Nameupdate'
import Cssprops from './Props/Cssprops'
import Propstransfer from './Props/WithoutProps/Propstransfer'
import Objtranfer from './Props/WithoutProps/Objtranfer'
import Changecolor from './States/Changecolor'
import PropsState from './States/PropsState'
import Videos from './Videos'
const FunctionMain = () => {
  const mystyle = {
    color: "black",
    backgroundColor: "green",
    textAlign: "center"
  }
  function myFunc(){
    alert('hello world')
  }
  const text = {
    name: "Abhishek",
    sex: "Male",
    age: 56,
    email: "abc@gmail.com"
  }
  const func1 = () => { alert("hello world"); }

  return (
    <>
      {/* <Nameupdate style={{float:"right"}} value={"Abhishek"} func={myFunc}/>
      <WithoutProp Data="Abhishek"/>
      <Cssprops style={mystyle} func={myFunc}/>
      <Propstransfer myobj={{ name:"Avik",surname:"Das",age:"87"}}/>
      <Objtranfer text2={text}/>
      <Changecolor/>
      <PropsState text={"Abhishek"} Data1={func1}/>
      <Videos/> */}
    </>
  )
}

export default FunctionMain