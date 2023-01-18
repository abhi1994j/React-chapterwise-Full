import React, { Component } from 'react'
import Students from './Students'

export default class Unmount extends Component {
  constructor(){
    super()
    this.state={
      show:true
    }
  }
 
  render() {
    return (
      <>
        { this.state.show ? <Students/> : <h1>Component is removed</h1> }
        <h1>Component did Unmount</h1>
        {/* <button onClick={()=>{this.setState({show:!this.state.show})}}>toggle component</button> */}
        <button onClick={()=>{this.setState({show:false})}}>toggle component</button>
      </>
    )
  }
}
