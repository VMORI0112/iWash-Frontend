import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoggedHome.module.css';
import washerOpen from '../../../img/washing/w1.png';
import washerClose from '../../../img/washing/w2.png';

const LoggedHome = () => {
    return (
        <>
        <section className={styles.section}>
            <h1 className="text-center">Laundromat</h1>
            <div className="container">
                <h2 className="text-center">Wahers</h2>
                <div className="row">

                    <div className="col-4 text-center">
                        <Link to="/wash/1" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <img className={styles.noavailable} src={washerClose} alt="washer" />
                    </div>
                    <div className="col-4 text-center">
                        <img className={styles.available} src={washerOpen} alt="washer" />
                    </div>
                    
                </div>
                <div className="row mt-5">

                    <div className="col-4 text-center">
                        <img className={styles.available} src={washerOpen} alt="washer" />
                    </div>
                    <div className="col-4 text-center">
                        <img className={styles.available} src={washerOpen} alt="washer" />
                    </div>
                    <div className="col-4 text-center">
                        <img className={styles.noavailable} src={washerClose} alt="washer" />
                    </div>
                    
                </div>
                
                
            </div>
        </section>
        <section className={styles.section2}>
            <div className="container">
            <h2 className="text-center">Dryers</h2>
                <div className="row" style={{backgroundColor: "white"}}>

                    <div className="col-4 text-center">
                        <img className={styles.available} src={washerOpen} alt="washer" />
                    </div>
                    <div className="col-4 text-center">
                        <img className={styles.noavailable} src={washerClose} alt="washer" />
                    </div>
                    <div className="col-4 text-center">
                        <img className={styles.available} src={washerOpen} alt="washer" />
                    </div>
                    
                </div>
                <div className="row mt-5">

                    <div className="col-4 text-center">
                        <img className={styles.available} src={washerOpen} alt="washer" />
                    </div>
                    <div className="col-4 text-center">
                        <img className={styles.available} src={washerOpen} alt="washer" />
                    </div>
                    <div className="col-4 text-center">
                        <img className={styles.noavailable} src={washerClose} alt="washer" />
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
};

export default LoggedHome;