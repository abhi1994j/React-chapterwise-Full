import React, { Component, PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(){
        super()
        this.state={
            data:10
        }
    }
  render() {
      console.log(this.state);
    return (
      <div>
        <h1>REact Pure compunent {this.state.data}</h1>
        <button onClick={()=>{this.setState({data:25})}}>update</button>
      </div>
    )
  }
}
