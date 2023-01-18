import React, { Component } from 'react'

export default class Students extends Component {
    componentWillUnmount(){
        alert(`component removed`);
        console.log("hello world")
      }
  render() {
    return (
      <h1>Students</h1>
    )
  }
}
