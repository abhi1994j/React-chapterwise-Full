import React, { useState } from "react";

export default function BasicFormValidation() {
  const initialValue = { name: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValue);

  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(valiDate(formValues));
  };

  const valiDate = (values) => {
    const error = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      error.name = "user name is required";
    }

    if (!values.email) {
      error.email = "user name is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    
    if (!values.password) {
      error.password = "user name is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    return error;
  };
  return (
    <>
      <div className="container">
        <h1>React from Validation</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input type="text" name="name" className="form-control" value={formValues.name} onChange={handleChange} placeholder="Enter user name"/>
            <p>{formError.name}</p>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input type="email" name="email" className="form-control" value={formValues.email} onChange={handleChange} placeholder="Enter user email"/>
            <p>{formError.email}</p>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" value={formValues.password} onChange={handleChange} placeholder="Enter user password"/>
            <p>{formError.password}</p>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

