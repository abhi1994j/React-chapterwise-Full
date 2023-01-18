import React, { Component } from 'react'

export default class Propcss extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <>
        <h1 style={this.props.style}>hello world</h1>
      </>
    )
  }
}
