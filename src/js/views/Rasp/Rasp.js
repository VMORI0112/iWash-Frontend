import React from 'react';
import styles from './Rasp.module.css';
import swal from 'sweetalert';

const Rasp = () => {

    // const [show, setShow] = useState(false);

    const clik = () => {

        // swal("Good job!", "You clicked the button!", "success", {
        //     button: "Aww yiss!",
        //   }).then(() => {
        //       alert('hellooo');
        //   })
        swal("Sorry we couldn't find an account with that email.", "Try to register first.!", "error", {
            button: "TRY AGAIN!",
          })



        // fetch('http://172.16.100.7:3000/iwash',{
        //     method: 'POST',
        //     body: JSON.stringify({
        //         "action": "",
        //         "msg": "WASHING"
        //     }),
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(res => console.log(res.msg))
        // .catch(error => console.log('error: ', error) );
    }
 
    return (
        <section className={styles.section} >
            Rasp home
            <button onClick={clik} >Get from rasp</button>

            {/* <SweetAlert
                show={show}
                title="Demo"
                text="SweetAlert in React"
                onConfirm={() => setShow(false) }
            /> */}
        </section>
    );
};

export default Rasp;