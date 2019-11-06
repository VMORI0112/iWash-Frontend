import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

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

    if (howTimeLeftSecond > 0) {
        howTimeLeft = howTimeLeftMinutes;
        secondLeft = remind;
     } else if (howTimeLeftSecond === 0) {
        swal("The Machine is Done" , "You can now pick up your lanudry", "success", {
            button: "Done",
          })
    } else {
        howTimeLeft = '00';
        secondLeft = '00';
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
        <br/>
        reminder: => <h3>{howTimeLeft}:{secondLeft}</h3>

        </>
    );
};

export default Timer;