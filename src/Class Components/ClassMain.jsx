import React, { Component } from 'react'
import ConstructorLife from './Lifecycle/ConstructorLife'
import RenderLife from './Lifecycle/RenderLife'
import ShouldComponent from './Lifecycle/ShouldComponent'
import Unmount from './Lifecycle/Unmount'
import Propcss from './Props/Propcss'
import Propsbasic from './Props/Propsbasic'
import StudentBio from './States/StudentBio'
import StudentObj from './States/StudentObj'
import Stylestate from './States/Stylestate'

export default class ClassMain extends Component {
 
  render() {
    const Obj={
      name:"Abhishek Chatterjee",
      city:"Jadavpur"
    }
    const Mystyle ={
      backgroundColor:"red",
      color:"Blue"
    }
    return (
      <>
           {/* <StudentObj city='Delhi'/> 
           <StudentBio city={Obj.city} name={Obj.name}/>
           <ConstructorLife/>
           <RenderLife name="Abhishek"/>
           <Propcss style={Mystyle}/>
           <Propsbasic text={{name:"Abhishek",age:56,sex:"male",qualification:"hs pass"}}/>
           <ShouldComponent/>
           <Unmount/>
           <Stylestate/> */}
      </>
    )
  }
}
