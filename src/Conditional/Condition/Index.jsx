import React from "react";
import Login from "../Checking/Login";
import Logout from "../Checking/Logout";

export default function Index() {
  const isLogin = false;
  if (isLogin) {
    return <Login name="Abir" />;
  } else {
    return <Logout name="Amit" />;
  }
}
