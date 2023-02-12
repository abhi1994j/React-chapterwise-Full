import React, { Component } from 'react'
import ConstructorLife from './Lifecycle/ConstructorLife'
import RenderLife from './Lifecycle/RenderLife'
import ShouldComponent from './Lifecycle/ShouldComponent'
import Shouldexample2 from './Lifecycle/Shouldexample2'
import Unmount from './Lifecycle/Unmount'
import Propcss from './Props/Propcss'
import Propsbasic from './Props/Propsbasic'
import StudentBio from './States/StudentBio'
import StudentObj from './States/StudentObj'
import Stylestate from './States/Stylestate'
import Pure from './Pure'
import BasicStates from './States/BasicStates'

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
           {/* <ConstructorLife/> */}
           {/* <RenderLife name="Abhishek"/> */}
           {/* <ShouldComponent/> */}
           {/* <Shouldexample2/> */}
           {/* <Unmount/> */}
           {/* <Propcss style={Mystyle}/> */}
           {/* <Propsbasic text={{name:"Abhishek",age:56,sex:"male",qualification:"hs pass"}}/> */}
           {/* <BasicStates user="Avik"/> */}
           {/* <StudentBio city={Obj.city} name={Obj.name}/> */}
           {/* <StudentObj city='Delhi'/>  */}
           {/* <Stylestate/> */}
           {/* <Pure/> */}
      </>
    )
  }
}
