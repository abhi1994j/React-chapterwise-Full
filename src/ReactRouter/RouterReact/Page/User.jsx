import React from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {
    const params =useParams();
    const {Name}=params;
  return (
    <>
        <h1>This is {Name} Pages</h1>
        <Link to='/'>Go to the Home Page</Link>
    </>
  )
}

export default User