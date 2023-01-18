import React from "react";
import { useState } from "react";
const HocFlag = () => {
  return (
    <>
      <HOCComA profile={Profile1} />
      <HOCComB profile={Profile1} />
      <HOCComC profile={Profile1} age={26} />
    </>
  );
};
export default HocFlag;

function HOCComA(props) {
  return (
    <h1 style={{ backgroundColor: "Orange" }}>
      <center>kehte Humko</center> <props.profile />
    </h1>
  );
}
function HOCComB(props) {
  return (
    <>
      <div className="mt-5">
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h1>
          {" "}
          <center>Pyaar se</center> <props.profile />
        </h1>
        <img style={{'margin-right':'150px'}} src="./Assets/Image/images.png" />
        </div>
      </div>

    </>
  );
}
function HOCComC(props) {
  return (
    <h1 style={{ backgroundColor: "Green" }}>
      <center>Indiawale</center> <props.profile />
    </h1>
  );
}
function Profile1() {
  const [Name, setName] = useState("Abhishek");
  return (
    <div>
      <h1 className="text-center">{Name}</h1>
      <div className="d-flex justify-content-center">
        <button className="btn-sm" onClick={() => setName("Avik")}>
          update
        </button>
      </div>
    </div>
  );
}
