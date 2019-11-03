import React from 'react';
import styles from './Wallet.module.css';

const Wallet = () => {
    return (
        <section className={styles.section}>
            <div className={["container text-center", styles.white].join(' ')}>
                <h1>Wallet</h1>
                <p>your current credit is: $40</p>
                <button className={["btn btn-lg m-3", styles.btnOrange].join(' ')} > + $10</button>
                <button className="btn btn-danger btn-lg m-3" > + $20</button>
                <button className="btn btn-danger btn-lg m-3" > + $30</button>
                <button className="btn btn-danger btn-lg m-3" > + $40</button>
                <button className="btn btn-danger btn-lg m-3" > + $50</button>
            </div>
        </section>
    );
};

export default Wallet;