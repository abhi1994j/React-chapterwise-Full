import React, { useState } from "react";

export const HocCount = () => {
//A higher-order component (HOC) is an advanced technique in React for reusing component logic.
//A higher-order component is a function that takes a component as an argument and returns a new component with additional functionality. HOCs are commonly used to add additional behavior or props to a component without modifying the original component's code. 
return (
    <div >
        <u><h1 className="text-center font-weight-bold bg bg-secondary">HOC</h1></u>
        <div className="d-flex justify-content-center"> 
            <HOCRed cmp={Counter} />
            <HOCGreen cmp={Counter} />
            <HOCBlue cmp={Counter} value={'Avik'}/>
        </div>
    </div>
  );
};
function HOCRed(props) {
  return (
    <h2 className="mr-2 w-25 text-center" style={{ backgroundColor: "red" }}>
      Red
      <props.cmp />
    </h2>
  );
}
function HOCGreen(props) {
  return (
    <h2 className="mr-2 w-25 text-center" style={{ backgroundColor: "green" }}>
      Green
      <props.cmp />
    </h2>
  );
}



function HOCBlue(props) {
    const [blueName,setBluenameChange]=useState('Abhishek')
    return (
      <h1 className="mb-2 w-25 text-center" style={{ backgroundColor: "blue" }}>
        Blue
        <props.cmp/><br/>
        {blueName}<br/>
        <button onClick={()=>setBluenameChange(props.value)}>Change</button>

      </h1>
    );
  }
  // State updating , Counter is the HOC Component
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4 className="display-4">{count}</h4>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

