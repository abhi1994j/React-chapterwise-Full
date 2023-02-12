import React, { Component } from 'react'

export default class BasicStates extends Component {
    state={
        name:"Raju kayal",
        phone:"9933935760",
        email:"raju@gmail.com",
        // you can pass state as an this.props
        //city:this.props.city
        user:this.props.user
    }
  render() {
    return (
      <div>
        <h1>Directly inside the classs using state/without condtructor</h1>
        <p>Hello {this.state.name}</p>
        <p>Your email id is {this.state.email} </p>
        <p>Your Phone number is {this.state.phone}</p>
        <p>your city is {this.props.user} </p>
      </div>
    )
  }
}
