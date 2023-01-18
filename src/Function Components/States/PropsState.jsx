import React from 'react'
import { useState } from 'react'

const PropsState = (props) => {
    const initialState = props.text;
    const [data, setData] = useState(initialState)
    return (
        <>
            <h1>{data}</h1>
            <button onClick={() => { setData("Anil") }}> click me ! </button>
            <button onClick={props.Data1}>click</button>
        </>
    )
}

export default PropsState ;