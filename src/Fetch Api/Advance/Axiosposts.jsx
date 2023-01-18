import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Axiosposts = () => {
    const [MyData, setMyData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => { setMyData(res.data);})
    }, [])
    return (
        <>
            <h1>Axios tutorial</h1>
                <div className="container">
                    <div className="row">
                        {MyData.map((post) => {
                            const { userId,id, title, body } = post;
                            return (
                                <div className="col-md-4" key={userId}>
                                    <div className="card-body">
                                        <h4 className="card title">Id:{id}</h4>
                                        <h5 className="card text">Title:{title.slice(0,20)}</h5>
                                        <h5 className="card text">Body:{body.slice(0,20)}</h5>
                                        <a href="#" className="btn btn-primary">AlbumsDetails</a>
                                    </div>
                                </div>
                            )})}
                    </div>
                </div>

        </>
    )
}

export default Axiosposts