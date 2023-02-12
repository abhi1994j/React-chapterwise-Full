import React, { useState } from "react";
import Commentsapi from "./Commentsapi";
import AlbumApi from "../Components/AlbumApi";
import FakestoreCart from "../Components/FakestoreCart";
import FakestoreProducts from "../Components/FakestoreProducts";
import Axiosusers from "../Components/Axiosusers";

export default function Final() {
  const [data,setData] =useState(false)

  const getData=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/albums')
    const data1=await response.json();
    setData(data1);
    console.log(data1);
}
  return (
    <>
      <div className="container d-flex justify-content-center">
        <button type="button" className="btn btn-primary mr-2 " onClick={getData}>Albums</button>
        <button type="button" className="btn btn-secondary mr-2 " onClick={<FakestoreCart/>}>Carts</button>
        <button type="button" className="btn btn-success mr-2 " onClick={<FakestoreProducts/>}>Photos</button>
        <button type="button" className="btn btn-danger mr-2 " onClick={<Axiosusers/>}>Users</button>
        <button type="button" className="btn btn-warning "onClick={<Commentsapi/>}>Comments</button>
        <AlbumApi
        
        />
      </div>
    </>
  );
}
