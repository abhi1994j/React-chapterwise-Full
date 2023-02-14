import React, { useEffect, useState } from 'react'

const Time = () => {
    const today = new Date();
    const [clock, setClock] = useState({
        hour: today.getHours(),
        minute: today.getMinutes(),
        second: today.getSeconds(),
        milisecond: today.getMilliseconds()
    });

    useEffect(() => {
        setTimeout(() => {
            setClock({
                hour: today.getHours(),
                minute: today.getMinutes(),
                second: today.getSeconds(),
                milisecond: today.getMilliseconds()
            })
        }, 1000);
    })
    return (
        <>
            <h1>CLOCK</h1>
            <h3>Time: {clock.hour} : {clock.minute} : {clock.second} : {clock.milisecond}</h3>

        </>
    )
}

export default Time;
