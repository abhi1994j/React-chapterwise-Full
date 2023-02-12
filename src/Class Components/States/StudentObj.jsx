import React, { Component } from "react";

export default class StudentObj extends Component {
  state = {
    name: "Abhishek Chatterjee",
    phone: "9087755156",
    email: "abc@gmail.com",
    sex: "Male",
    count:1,
    // you can pass State as an this.props
    city: 'Mumbai'
  };
  componentDidMount(){
    console.log(`Called immediately after a component is mounted. Setting state here will trigger re-rendering.`);
  }

  componentDidUpdate(){
    console.log(`Updated value is ${this.state.count}`)
  }
  render() {
  
    return (
      <>
        <div>
          <h1>Directly inside the classs using State/without constructor</h1>
          <h4>ComponentDidMount: Called immediately after a component is mounted. Setting state here will trigger re-rendering.</h4>
          <h2> Hello My name is <u>{this.state.name}</u></h2>
          <h1>Your email id is {this.state.email} </h1>
          <h1>Your Phone number is {this.state.phone}</h1>
          <h1>your city is {this.state.city} </h1>
          <h1>your city is {this.state.sex} </h1>
          <h1>{this.state.count}</h1>
          <button onClick={() => this.setState({  name:"Chandan",sex: "Female", city:this.props.city,count: this.state.count+1})}>Change sex</button>
          {/* <button onClick={()=>this.setState({count:this.state.count+1})}>update</button> */}
        </div>
      </>
    );
  }
}
