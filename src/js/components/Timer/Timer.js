import React, { useEffect, useState } from 'react';

const Timer = (props) => {

    // const [newTime, setNewTime] = useState(0)
    const [count, setCount] = useState(Math.floor(props.time));

    var date = new Date();
    // var timestamp = date.getTime();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (count !== 0) setCount(count -1);
        },1000)
        if (count === 0) return () => {
            clearTimeout(timeout);
         }
    },[count])

    console.log(count);  

    return (
        <>
        here : {count} || now: {hours + " - " + minutes + " - " + seconds}

        </>
    );
};

export default Timer;