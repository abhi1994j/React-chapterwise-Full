import React, { useState, useEffect } from "react";
const FetchUser = () => {
  const [user, setuser] = useState([]);
  //The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setuser(data);
  };
  useEffect(() => {
    getUser();
  }, []);
  const style = {
    backgroundColor: "orange",
  };
  return (
    <>
      <h1>Basic Fetch</h1>
      <div className="container">
        <div className="row">
          {user.map((data) => {
            return (
              <div className="col-md-4" key={data.id}>
                <div className="card cardd" style={{ width: "18rem" }}>
                  <div className="card-header bg bg-secondary">
                    <h5 className="card-title">Name : {data.name}</h5>
                    <h5 className="card-title">Usename : {data.username}</h5>
                    <p className="card-text">Email : {data.email}</p>
                  </div>
                  <div className="card-body bg bg-secondary">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg bg-info">{data.address.street}</li>
                      <li className="list-group-item bg bg-success">{data.address.city}</li>
                      <li className="list-group-item bg bg-warning">{data.address.zipcode}</li>
                      <li className="list-group-item bg bg-primary">{data.address.zipcode}</li>
                      <li className="list-group-item" style={style}>{data.address.geo.lat}</li>
                    </ul>
                  </div>
                  <div className="card-footer" style={style}>
                    <a href="#" className="card-link">Card link</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default FetchUser;
