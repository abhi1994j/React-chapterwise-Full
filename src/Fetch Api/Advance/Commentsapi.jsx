import React, { useEffect, useState } from "react";
export default function Commentsapi() {
  const [Comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    setComments(await response.json());
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <h1 className="hi">Fetch Comments data </h1>
        <div className="container">
            <div className="row">
                {Comments.map((CurrentData) => {
                    return (
                    <div className="col-md-4" key={CurrentData.postId}>
                        <div className="card cardd">Id: {CurrentData.id}
                            <div className="card-body">
                                <h3 className="card-title">Name: {CurrentData.name.slice(0,15)}</h3>
                                <h5 className="card-title">Email: {CurrentData.email}</h5>
                                <p className="card-text">Body : {CurrentData.body.slice(0,55)}</p>
                                <a href="#" className="btn btn-primary">CommentDetails</a>
                            </div>
                        </div>
                    </div>
                );})}
            </div>
        </div>
    </>
  );
}
