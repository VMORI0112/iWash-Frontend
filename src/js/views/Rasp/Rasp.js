import React from 'react';
import styles from './Rasp.module.css';

const Rasp = () => {

    const clik = () => {
        fetch('http://172.16.100.7:3000/washerHot')
        // fetch('http://0.0.0.0:3000/rasp', {
           
            
        
        .then(res => console.log(res))
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