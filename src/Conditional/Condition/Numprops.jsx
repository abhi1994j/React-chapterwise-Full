import React from 'react'
 

export default function Numprops(props) {
    const num = props.number;
    if(num % 2 === 0)
    {
        return <h1>The Number is Even : {props.number}</h1>
    }
    else{
        return <h1>The Number is Odd : {props.number}</h1>
    }
}
