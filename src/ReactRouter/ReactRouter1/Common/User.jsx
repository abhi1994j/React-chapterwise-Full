import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    const {Name}=params;
  return (
    <>
        <h1>This is {Name}'s Page</h1>
    </>
  )
}

export default User;