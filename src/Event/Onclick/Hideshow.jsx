import React, { useState } from "react";
export default function Hideshow() {
  const [Data, setData] = useState(true);
  return (
    <>
      {Data ? <h1> hello Abhishek</h1> : null}
      <button onClick={()=>{setData(false)}}>Hide</button>
      <button onClick={()=>{setData(true)}}>Show</button>
    </>
  );
}
