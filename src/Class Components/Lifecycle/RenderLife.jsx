import React, { Component } from 'react'

export default class RenderLife extends Component {
    constructor(props){
        super(props);
        // console.log('hello',this.props)
        this.state={
            count:0
        }
    }
    componentDidMount(){
        // console.log("Lifecycle Practice");
    }
    componentDidUpdate(preProps,preState,snapshot){
        // console.info("Component need Update",preState.count,this.state.count)
      //  if(preState.count=== this.state.count){
      //   console.log('state already updated')
      //  }
      //  else {
      //   console.log('state not updated');
      //  }
      // if(this.state.count<10){
      //   this.setState({count:this.state.count+1})
      // }
      // else{
      //   console.log("count exceed")
      // }
    }
  render() {
    const obj={
      name:"Abhi",
      age:22
    }
    // this.setState({count:this.state.count+1})// render that count infinite times
    const foo="Amit"
    // parent component er props update render function er modhe hocha 
    // console.log('hey Buddy',this.props.name)
    return (
      <>
        <h1>why componentDidMount output show 2 times 1 for console.log and other one for render function rendering  </h1>
         {/* <h1>Change this {this.props.name}</h1> */}
         <h1>{this.state.count}</h1> 
         {/* <h1>{foo}</h1> */}
         {/* <h1>{obj.name} 'here we dont need to write this.obj.name'</h1> */}
         {/* <button onClick={()=>this.setState({count:this.state.count+1})}>click</button>  */}
         {/* <button onClick={()=>this.setState({count:1})}>click</button>  */}

       </> 
    )
  }
}
