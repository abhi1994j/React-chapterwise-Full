import React, { useReducer } from 'react'

const initialstate = 1

const reducer = (state, action) => {
    switch (action) {
        case 'incriment':
            return state + 1
        case 'decriment':
            return state - 1
            
        default:
            return state
    }

}

const BasicCalculation = () => {
    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <h1>hello </h1>
            <h1>{count}</h1>
            <button onClick={() => { dispatch('incriment') }}>Incriment</button>

            <button onClick={() => { dispatch('decriment') }}>Decriment</button>
        </div>
    )
}

export default BasicCalculation
