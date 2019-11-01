import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

import styles from './LoggedHome.module.css';
// import washerOpen from '../../../img/washing/w1.png';
import washerClose from '../../../img/washing/w2.png';


const LoggedHome = () => {

    const {washersData} = useContext(UserContext);
    const {dryersData} = useContext(UserContext);

    return (
        <>
        <section className={styles.section}>
            <h1 className="text-center">Laundromat</h1>
            <div className="container">
                <div className="text-center">
                    <button className={styles.btnIwash}>Wahers</button>
                    <button className={styles.btnIwash}>Dryers</button>
                </div>

                <div className="row">
                    <div className="col-3">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text">
                                    <span class="badge badge-danger">Danger</span>
                                    <span class="badge badge-pill badge-primary float-right">10</span>
                                </p>
                            </div>
                            <img src={washerClose} class="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>













                {/* <div className="row">

                    <div className="col-4 text-right p-3">
                        <Link to="/machine/wash1" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    <div className="col-4 text-right p-3">
                        <img className={styles.noavailable} src={washerClose} alt="washer" />
                    </div>
                    <div className="col-4 text-right p-3">
                        <Link to="/machine/wash2" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    
                </div> */}
                {/* <div className="row mt-5">

                    <div className="col-4 text-right p-3">
                        <Link to="/machine/wash3" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    <div className="col-4 text-right p-3">
                        <Link to="/machine/wash4" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    <div className="col-4 text-right p-3">
                        <img className={styles.noavailable} src={washerClose} alt="washer" />
                    </div>
                    
                </div> */}
                
                
            {/* </div>
        </section>
        <section className={styles.section2}>
            <div className="container">
            <h2 className="text-center">Dryers</h2>
                <div className="row" style={{backgroundColor: "white"}}>

                    <div className="col-4 text-center">
                        <Link to="/machine/dry1" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <img className={styles.noavailable} src={washerClose} alt="washer" />
                    </div>
                    <div className="col-4 text-center">
                        <Link to="/machine/dry2" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    
                </div>
                <div className="row mt-5">

                    <div className="col-4 text-center">
                        <Link to="/machine/dry3" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <Link to="/machine/dry4" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <Link to="/machine/dry5" className={styles.machinChoice}>
                            <img className={styles.available} src={washerOpen} alt="washer" />
                        </Link>
                    </div>
                    
                </div> */}
            </div>

            {!washersData ? 'loading' : washersData.map((item,index) => {
            return (
                <Link to={"machine/"+index} key={index}>
                    {item.type} - {item.number}
                    <br/>
                </Link>
            )
        })}
        <br/>
        {!dryersData ? 'loading' : dryersData.map((item,index) => {
            return (
                <Link to={"machine/"+index} key={index}>
                    {item.type} - {item.number}
                    <br/>
                </Link>
            )
        })}

        </section>
        </>
    );
};

export default LoggedHome;