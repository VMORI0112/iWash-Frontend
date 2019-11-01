import React from 'react';
import styles from './Rasp.module.css';

const Rasp = () => {

    const clik = () => {
        fetch('http://172.16.100.7:3000/iwash',{
            method: 'POST',
            body: JSON.stringify({
                "action": "delicate",
                "msg": "WASHING"
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => console.log(res.msg))
        // .then(msg => console.log(msg))
        .catch(error => console.log('error: ', error) );
    }
 
    return (
        <section className={styles.section} >
            Rasp home
            <button onClick={clik} >Get from rasp</button>
        </section>
    );
};

export default Rasp;