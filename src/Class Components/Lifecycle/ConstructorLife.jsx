import React, { Component } from 'react'

export default class ConstructorLife extends Component {
  constructor(){
        super();
        console.log('hello');
        this.state={
            data:"Avishek"
        }
    }
  render() {
    console.log("Hello buddy ");
    return (
      <>
      <h1>At first called the constructor a,then call render function and then called ComponentDidMount</h1>
      <h1>{this.state.data}</h1>
        {/* <h1>hello world</h1> */}
      </>
    )
  }
}
