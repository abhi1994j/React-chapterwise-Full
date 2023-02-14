import React from 'react'
import Changecolor from './States/Changecolor'
import Myfunc from './States/Myfunc'
import Nameupdate from './States/Nameupdate'
import PropsState from './States/PropsState'
import Videos from './Videos'
import Objtranfer from './Props/WithoutProps/Objtranfer'
import Propstransfer from './Props/WithoutProps/Propstransfer'
import Cssprops from './Props/Cssprops'
import WithoutProp from './Props/WithoutProp'
import NavProps from './Props/NavProps'
import Hello2 from './Props/components/Hello2'

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
      {/* <Changecolor/> */}
      {/* <Myfunc/> */}
      {/* <Nameupdate style={{float:"right"}} value={"Abhishek"} func={myFunc}/> */}
      {/* <PropsState text={"Abhishek"} Data1={func1}/> */}
      {/* <Videos/> */}
      {/* <Objtranfer text2={text}/> */}
      {/* <Propstransfer myobj={{ name:"Avik",surname:"Das",age:"87"}}/> */}
      {/* <Cssprops style={mystyle} func={myFunc}/> */}
      {/* <NavProps title="Blogs" about="About-us"/> */}
      {/* <WithoutProp Data="Abhishek"/> */}
      {/* <Hello2 text={text}/> */}
    </>
  )
}

export default FunctionMain