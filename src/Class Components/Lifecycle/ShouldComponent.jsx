import React, { Component } from 'react'

export default class ShouldComponent extends Component {
    constructor(){
        super()
        this.state={
            count:1
        }
    }
    componentDidUpdate(){
      console.log(`hello world`);
    }
    shouldComponentUpdate(){
        console.log(`should you need your component update`,this.state.count);
        if(this.state.count>5 && this.state.count<10){
             return true;
        }
        return false;
    }
  render() {
    return (
      <>
        <h1>ShouldComponent {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>update</button>

      </>
    )
  }
}
