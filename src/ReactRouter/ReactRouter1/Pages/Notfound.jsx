import React from "react";
import { Link } from "react-router-dom";
const Notfound=()=>{
    return (
        <>
            <h1>404 not found</h1>
            <h1>this page not valid </h1> 
            <Link to='/'>Go to Home page</Link>
        </>
    )
}
export default Notfound;