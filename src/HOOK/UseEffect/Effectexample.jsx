import React, { useState, useEffect } from 'react';

export default function Effectexample() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
 const Abhi= useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    let date1=new Date();
    date1.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",})
      console.log(date1)
    // setTimeout((e)=>{e.toLocaleTimeString("en-US", {
    //   hour: "2-digit",
    //   minute: "2-digit",})},1000)
  });

  return (
    <div>
      <h1>Now The time is {Abhi}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
