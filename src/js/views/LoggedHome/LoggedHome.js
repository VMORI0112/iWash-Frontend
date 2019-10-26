import React from 'react';
import styles from './LoggedHome.module.css';
import washerOpen from '../../../img/washing/w1.png';
import washerClose from '../../../img/washing/w2.png';

const LoggedHome = () => {
    return (
        <section className={styles.section}>
            <h1>Logged Home</h1>
            <div className="container">
                <div className="row">

                    <div className="col">
                        <img className="card-img-top" src={washerOpen} alt="washer" />
                    </div>
                    <div className="col">
                        <img className="card-img-top" src={washerClose} alt="washer" />
                    </div>
                    <div className="col">
                        <img className="card-img-top" src={washerOpen} alt="washer" />
                    </div>
                    <div className="col">
                        <img className="card-img-top" src={washerClose} alt="washer" />
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default LoggedHome;