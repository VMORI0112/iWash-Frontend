import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Wallet.module.css';

const Wallet = () => {
    return (
        <section className={styles.section}>
            <div className={["container text-center", styles.white].join(' ')}>
                <h1>Wallet</h1>
                <h3>Add more credit to your wallet.</h3>
                <h3>your current credit is: $40</h3>
                <h4>Choose the Amount:</h4>
                <Link to='/checkout' className={["btn btn-lg m-3", styles.btnOrange].join(' ')} > + $10</Link>
                <Link to='/checkout' className={["btn btn-lg m-3", styles.btnOrange].join(' ')} > + $20</Link>
                <Link to='/checkout' className={["btn btn-lg m-3", styles.btnOrange].join(' ')} > + $30</Link>
                <Link to='/checkout' className={["btn btn-lg m-3", styles.btnOrange].join(' ')} > + $40</Link>
                <Link to='/checkout' className={["btn btn-lg m-3", styles.btnOrange].join(' ')} > + $50</Link>
            </div>
        </section>
    );
};

export default Wallet;