import React, { Component } from 'react'

// shouldComponentUpdate() method comes under updating phase of lifecycle of component. if it returns false value then component does not render.

export default class Shouldexample2 extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }
    shouldComponentUpdate() {
        // return true;
        return false;
    }

    render() {
        return (
            <>
                <h1>should component</h1>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.handleClick}>count</button>

            </>
        )
    }
}
