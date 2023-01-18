import React from "react";
import Myfunction from "../Myfunction";
export default function Eventuse(props) {
  const Myfunc = () => {
    alert(`Hello ${props.name}`);
  };
  const Myfunc1 = () => {
    prompt("What is your Name?");
  };
  return (
    <div className="d-flex justify-content-center">
      <button className="mr-2" onClick={Myfunction}>
        Click me to Alert
      </button>
      <button className="mr-2" onClick={Myfunc}>
        Click me to Alert again
      </button>
      <button onClick={Myfunc1}>Click me to Prompt</button>
    </div>
  );
}
