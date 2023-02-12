import React, { useState, useEffect } from "react";

const AdvanceFormValid = () => {
  const initialState = {email: "",username: "",password: ""};
  const [Formvalue, setFormvalue] = useState(initialState);
  const [Formerror, setFormerror] = useState({});
  const [Issubmit, setIssubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setFormerror(validate(Formvalue));
    setIssubmit(true);
  };
  const validate = (value) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.email) {
      error.email = "Email is required";
    } else if (!regex.test(value.email)) {
      error.email = "Email is not valid";
    }
    if (!value.username) {
      error.usename = "Username is required";
    }
    // else if(value.usename.length<6){
    //     error.usename='Username must be more than 5'
    // }
    if (!value.password) {
      error.password = "Password is required";
    } else if (value.password.length < 6) {
      error.password = "Password must be more than 5";
    } else if (value.password.length > 10) {
      error.password = "Password is exceed";
    }

    return error;
  };
  useEffect(() => {
    if (Object.keys(Formerror).length == 0 && Issubmit) {
      console.log(Formvalue);
    }
  }, [Formerror]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...Formvalue, [name]: value });
    // console.table(Formvalue);
  };
  return (
    <>
      <h1>Basic Form Valid</h1>
      <div className="d-flex justify-content-center">
        <div className="bg-info text-light w-50 p-4 m-3 border border-dark">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control"onChange={handleChange} 
              name="email" value={Formvalue.email} placeholder="Enter Your Email" 
              id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" className="text-danger">{Formerror.email}</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Username</label>
              <input type="text" name="username"value={Formvalue.username}onChange={handleChange}
                className="form-control"id="exampleInputUsername"aria-describedby="usernameHelp"
                placeholder="Enter Your Username"/>
              <small id="usernameHelp" className="text-danger">{Formerror.username}</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword">Password</label>
              <input type="password" className="form-control"name="password"onChange={handleChange}
              id="exampleInputPassword"value={Formvalue.password}placeholder="Enter your password"
              aria-describedby="passwordHelp"/>
              <small id="passwordHelp" className="text-danger">{Formerror.password}</small>
            </div>
            <button type="submit" className="btn btn-success"
            style={{ margin: "0 auto", display: "flex", width: "auto" }}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdvanceFormValid;
