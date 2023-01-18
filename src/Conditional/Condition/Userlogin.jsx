import React from "react";
import Login from "../Checking/Login";
import Logout from "../Checking/Logout";

const Userlogin = () => {
  const ifLogin = true;
  return <>{ifLogin ? <Login name="Abir" /> : <Logout name="Amit" />}</>;
};

export default Userlogin;
