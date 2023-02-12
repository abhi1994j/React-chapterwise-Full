import React, { useReducer } from "react";
// const initialState = 2;
const reducer = (state, action) => {
  console.log(state, action);
  if(action.type==="Increment") {
    return state+2 ;
  } 
  else if(action.type==="Decrement") {
    return state-2;
  }
  else if(action.type ==="Multiply"){
    return state*2;
  }
  else if(action.type === "Divide"){
    return state/2;
  }
  else if(action.type ==="Cube"){
    return Math.pow(state,3);
  }
  return state;
};
export const REducerBasicExample = () => {
  const [state, dispatch] = useReducer(reducer,2);
  return (
    <>
      <h1>{state}</h1>
      <div className="btnStylePosition">
        <button onClick={() => dispatch({ type: "Increment" })} className="btn btn-primary">Increment</button>
        <button onClick={() => dispatch({ type: "Decrement" })} className="btn btn-success">Decrement</button>
        <button onClick={() => dispatch({ type: "Multiply" })} className="btn btn-danger">Multiplication</button>
        <button onClick={() => dispatch({ type: "Divide" })} className="btn btn-info">Divide</button>
        <button onClick={() => dispatch({ type: "Cube" })} className="btn btn-dark">Cube</button>
      </div>
    </>
  );
};

