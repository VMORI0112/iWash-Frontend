import React from 'react';
import styles from './LoggedHome.module.css';
import washerOpen from '../../../img/washing/w1.png';

const LoggedHome = () => {
    return (
        <section className={styles.section}>
            <h1>Logged Home</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src={washerOpen} alt="washer" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </section>
    );
};

export default LoggedHome;