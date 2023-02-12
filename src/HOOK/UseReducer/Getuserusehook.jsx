import React, { useReducer, useEffect } from "react";

const initialstate = {
  loding: true,
  error: "",
  userData: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loding: false,

        userData: action.result,
        error: "",
      };
    case "ERROR":
      return {
        loding: false,
        userData: {},
        error: "PROBLEM TO FETCH",
      };
    default:
      return state;
  }
};
const Getuserusehook = () => {
  
  const [state, dispatch] = useReducer(reducer, initialstate);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", result: data });
      })
      .catch((error) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div>
      <h1>get the api data using use reduce hooks</h1>
      {state.userData.address.city}
      <br />
      {state.userData.address.geo.lat}
      <br />
      {state.userData.email}
      <br />
      {state.userData.address.street}
      <br />
      {state.userData.website}
      {state.error || null}
    </div>
  );
};

export default Getuserusehook;
