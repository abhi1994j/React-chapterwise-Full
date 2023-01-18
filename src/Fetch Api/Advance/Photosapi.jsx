import React, { useEffect, useState } from "react";

export default function Photosapi() {
  const [Photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10");
    setPhotos(await response.json());
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <h1> Fetch Photos </h1>
        <div className="container">
          <div className="row">
            {Photos.map((CurrentData) => {
              return (
                <div className="col-md-4" key={CurrentData.albumId}>
                  <div className="card cardd">Id: {CurrentData.id}
                    <div className="card-body">
                      <h5 className="card-text">Title : {CurrentData.title}</h5>
                      <img src={CurrentData.thumbnailUrl} className="card-img-top" />
                      <a href="#" className="btn btn-primary">PhotoDetails</a>
                    </div>
                  </div>
                </div>);})}
          </div>
        </div>
    </>
  );
}
