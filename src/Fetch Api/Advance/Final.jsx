import React from "react";
import Commentsapi from "./Commentsapi";
import AlbumApi from "../Components/AlbumApi";
import FakestoreCart from "../Components/FakestoreCart";
import FakestoreProducts from "../Components/FakestoreProducts";
import Axiosusers from "../Components/Axiosusers";

export default function Final() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary mr-2 "
          onClick={<AlbumApi/>}
        >
          Albums
        </button>
        <button
          type="button"
          className="btn btn-secondary mr-2 "
          onClick={<FakestoreCart/>}
        >
          Carts
        </button>
        <button
          type="button"
          className="btn btn-success mr-2 "
          onClick={<FakestoreProducts/>}
        >
          Photos
        </button>
        <button
          type="button"
          className="btn btn-danger mr-2 "
          onClick={<Axiosusers/>}
        >
          Users
        </button>
        <button
          type="button"
          className="btn btn-warning "
          onClick={<Commentsapi/>}
        >
          Comments
        </button>
      </div>
    </>
  );
}
