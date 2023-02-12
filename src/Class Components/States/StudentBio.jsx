import React, { Component } from 'react'

export default class StudentBio extends Component {
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            phone:"9933935760",
            city:this.props.city
        }
          console.log(this.state.city,this.props.city);
    }
  render() {
    const func=()=>{
        this.setState({city:"bangalore"})
    }
    return (
      <div>
        <h1>using state inside the constructror/state with constructor</h1>
        <p>your name is {this.state.name} </p>
        <p>your phone no is {this.state.phone}</p>
        <p>your city {this.state.city}</p>
        {/* <button onClick={func}>click it</button> */}
        <button onClick={()=>this.setState({name:"Abhinash Das"})}>click it</button>
      </div>
    )
  }
}
