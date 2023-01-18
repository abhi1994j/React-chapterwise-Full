import React, { Component } from 'react'

export default class Propsbasic extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const {name,age,qualification}=this.props.text;
    return (
      <>
        <h1>{name} and {age}  and {qualification}</h1>
        <h1>{this.props.text.sex}</h1>
      </>
    )
  }
}
