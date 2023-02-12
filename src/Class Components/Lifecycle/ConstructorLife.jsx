import React, { Component } from 'react'

export default class ConstructorLife extends Component {
  constructor(){
        super();
        console.log('hello from Constructor');
        this.state={
            data:"Avishek"
        }
    }
  render() {
    console.log("Hello buddy from Render ");
    return (
      <>
      <h1>At first called the constructor, then call render function and then called ComponentDidMount</h1>
      <h1>{this.state.data}</h1>
        {/* <h1>hello world</h1> */}
      </>
    )
  }
}
