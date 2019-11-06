import React, { useEffect, useState } from 'react';

const Timer = (props) => {

    // const [newTime, setNewTime] = useState(0)
    const [count, setCount] = useState(Math.floor(props.time));

    var date = new Date();
    var timestamp = date.getTime();
    console.log(props.start);

    let howTimeLeftMinutes = Math.floor((props.end - timestamp) / 60000);
    let howTimeLeftSecond = Math.floor((props.end - timestamp) / 1000);
    let howTimeLeft;
    let secondLeft;

    let remind = Math.floor(howTimeLeftSecond % 60);

    if (howTimeLeftMinutes > 0) {
        howTimeLeft = howTimeLeftMinutes;
        secondLeft = howTimeLeftSecond;
    } else {
        howTimeLeft = 0;
        secondLeft = 0;
    }
    
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (count !== 0) setCount(count -1);
        },1000)
        if (count === 0) return () => {
            clearTimeout(timeout);
         }
    },[count])

    // console.log(count);  

    return (
        <>
        {/* here : {count} || now: {hours + " - " + minutes + " - " + seconds} */}
        <br/>
        time left: = {howTimeLeft} || seconds left: = {secondLeft} 
        <br/>
        reminder: => <h3>{howTimeLeft}:{remind}</h3>

        </>
    );
};

export default Timer;