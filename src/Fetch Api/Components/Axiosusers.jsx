import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Axiosusers = () => {
    const [users, setusers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => { setusers(res.data) })
    }, [])

    return (
        <>
            <h1>Axios users</h1>
            <div className="container">
                <div className="row">
                    {users.map((user) => {
                        
                        return (
                            <div className='col-md-4' key={user.id}>
                                    <div className="card body">
                                        <h1 className="card tilte">id:{user.id}</h1>
                                        <h2 className="card text">Name:{user.name.slice(0,125).toUpperCase()}</h2>
                                        <h3 className="card text">Username:{user.username}</h3>
                                        <h5 className="card text">Email:{user.email}</h5>
                                        <h5 className="card text">Address:{user.address.street}</h5>
                                        <h5 className="card text">Email:{user.email}</h5>
                                        <h5 className="card text">Website:{user.website}</h5>
                                        <a href="#" className="btn btn-success">UsersDetails</a>
                                    </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Axiosusers;