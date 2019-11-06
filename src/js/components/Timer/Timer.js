import React, { useState } from 'react';
import swal from 'sweetalert';

const Timer = (props) => {

    const [swalAlert, setSwalAlert] = useState(true);

    var date = new Date();
    var timestamp = date.getTime();

    let howTimeLeftMinutes = Math.floor((props.end - timestamp) / 60000);
    let howTimeLeftSecond = Math.floor((props.end - timestamp) / 1000);
    let howTimeLeft;
    let secondLeft;

    let remind = Math.floor(howTimeLeftSecond % 60);

    if (howTimeLeftSecond > 0) {
        howTimeLeft = howTimeLeftMinutes;
        secondLeft = remind;
     } else if (howTimeLeftSecond === 0 && swalAlert === true) {
        swal("The Machine is Done" , "You can now pick up your lanudry", "success", {
            button: "Done",
          })
        setSwalAlert(false);
    } else {
        howTimeLeft = '00';
        secondLeft = '00';
    } 

    return (
        <>
        <br/>
        reminder: => <h3>{howTimeLeft}:{secondLeft}</h3>

        </>
    );
};

export default Timer;