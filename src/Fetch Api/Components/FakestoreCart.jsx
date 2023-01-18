import React, { useState } from 'react'
import { useEffect } from 'react'

const FakestoreCart = () => {
    const [todo, SetTodo] = useState([])
    const getTodo = async () => {
        const response = await fetch("https://fakestoreapi.com/carts")
        SetTodo(await response.json())
        // console.log(response)
    }
    useEffect(() => {
        getTodo();
    }, [])

    return (
        <>
            <h1>Carts</h1>
            <div className="container">
                <div className="row">
                    {todo.map((user) => {
                        return (
                            <div className="col-md-4" key={user.userId}>
                                <div className="card cardd">Category: {user.id}
                                    <div className="card-body">
                                        <h5 className="card-title">Date:{user.date}</h5>
                                        {/* {console.log('product array', user.products)} */}
                                        {user.products.map((item) => {
                                            return (
                                                <>
                                                    <h5 className="card-title">ProductId:{item.productId}</h5>
                                                    <h5 className="card-title">Quantity:{item.quantity}</h5>
                                                </>
                                            )})}
                                        {/* <h5 className="card-title">ProductId:{user.products.productsId}</h5>
                                        <h5 className="card-title">Quality:{user.products.quality}</h5> */}
                                        <a href="#" className="btn btn-primary">Cartdetails</a>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </>
    )
}
export default FakestoreCart

