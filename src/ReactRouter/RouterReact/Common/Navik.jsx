import React from "react";
import { Navigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'

const Navik = () => {
  // const navigate=useNavigate()
  // const navi=(url)=>{
  //     navigate(url)
  // }
  let x = true;
  //    if(x){
  //     navigate('/about')
  //    }
  //    else{
  //     navigate('/contact')
  //    }
  return (
    <>
      {/* <button onClick={()=>navigate('/about')}>About page</button>
        <button  onClick={()=>navigate('/contact')}>Contact page</button> */}
      <h1>useNavigate hook uses</h1>
      {/* <button onClick={()=>navi("/about")}>go to the about page</button>
        <button onClick={()=>navi("/contact")}>go to the contact page</button> */}
      {x ? <Navigate to="/contact" /> : <Navigate to="/user/gandu" />}
    </>
  );
};

export default Navik;
