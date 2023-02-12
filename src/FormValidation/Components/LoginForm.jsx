import React, { useState } from "react";
import { useEffect } from "react";

const LoginForm = () => {
  const initialState = { username: "", email: "", password: "" };
  const [formvalue, setFormvalue] = useState(initialState);
  const [Formerrors, setFormerrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormerrors(validate(formvalue));
    setisSubmit(true);
    // console.log(e);
  };
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
    // console.log(formvalue)
  };
  useEffect(() => {
    if (Object.keys(Formerrors).length == 0 && isSubmit) {
      console.log(formvalue);
    }
  }, [Formerrors]);
  const validate = (value) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
    if (!value.username) {
      errors.username = "Username is required";
    }
    if (!value.email) {
      errors.email = "Email is required";
    } 
    else if (!regex.test(value.email)) {
      errors.email = "This is not a valid Email";
    }
    if (!value.password) {
      errors.password = "Password is required";
    } 
    else if (value.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password exceed";
    }
    return errors;
  };
  return (
    <div>
      {Object.keys(Formerrors).length === 0 && isSubmit ? (<h1 className="ui message success text-success">Login Sucessfully</h1>) : (<pre>{JSON.stringify(formvalue, undefined, 2)}</pre>)}
      <h1 className="text-secondary">Basic Form Validation</h1>
      <div className="d-flex justify-content-center">
        <div className="bg bg-success text-dark w-50 p-4 m-3 border border-dark">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputUsername">UserName</label>
              <input type="text"className="form-control"id="exampleInputUsername"name="username"placeholder="Username"value={formvalue.username}onChange={handleChange} />
            </div>
            <p>{Formerrors.username}</p>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email Address" name="email" value={formvalue.email} onChange={handleChange}/>
            </div>
            <p>{Formerrors.email}</p>
            <div className="form-group">
              <label htmlFor="exampleInputPassword">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" name="password" value={formvalue.password} onChange={handleChange}/>
            </div>
            <p>{Formerrors.password}</p>
            <button type="submit" className="btn btn-primary d-flex m-auto w-auto" >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
