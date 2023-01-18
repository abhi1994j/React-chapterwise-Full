import React from "react";

const WithoutProp = ({Data}) => {
  return (
    <>
        <div className="container" style={{ textAlign: "center" }}>
            <h1 >Married bacherlor</h1>
            <h1>{Data}</h1>
        </div>
    </>
  );
};

export default WithoutProp;
