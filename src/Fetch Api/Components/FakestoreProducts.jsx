import React, { useEffect } from 'react';
import { useState } from 'react';

const FakestoreProducts = () => {
    const [album, setAlbum] = useState([])
    const getAlbums = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        setAlbum(await response.json())
        // console.log(response);
    }
    useEffect(() => {
        getAlbums()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    {album.map((user) => {
                        return (
                            <div className="col-md-4" key={user.id}>
                                <div className="card cardd">Category: {user.category}
                                    <img src={user.image} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">Title:{user.title}</h5>
                                        <h5 className="card-title">Rating:{user.rating.rate}</h5>
                                        <h5 className="card-title">Price:{user.price}</h5>
                                        <a href="#" className="btn btn-primary">Productsdetails</a>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </>
    )
}
export default FakestoreProducts;