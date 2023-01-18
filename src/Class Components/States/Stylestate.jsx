import React from 'react';
class Stylestate extends React.Component {
    constructor() {
       super();
       this.state = { color: '#000' };
    }
    render() {
       return (
          <div>
             <h1 style={{ color: this.state.color }}>Raju Webskitters</h1>
             <button onClick={() => this.setState({ color: '#ff0000' })}>Change Color</button>
             <MyComp />
          </div>
       );
    }
 }
 class MyComp extends React.Component {
    render() {
       console.log('MyComp component is called');
       return (
          <div>
             <h1>should component</h1>
          </div>
       );
    }
 }
 export default Stylestate;

