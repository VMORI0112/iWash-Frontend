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
                    {!washersData ? 'loading' : washersData.map((item,index) => {
                        return (
                            <div key={index} className="col-3 my-3">
                                <Link to={"machine/"+index} >
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-text">
                                                <h4 className="text-center" >{item.name}</h4>
                                                <span className="badge badge-success">Available</span>
                                                <span className={["badge badge-pill badge-primary float-right", styles.number].join(' ')}>{item.number}</span>
                                            </div>
                                        </div>
                                        <img src={washerClose} className="card-img-top" alt="..." />
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <br/>
                <hr/><br/>

                <div className={["row", styles.dryerContainer].join(' ')}>
                    {!dryersData ? 'loading' : dryersData.map((item,index) => {
                        return (
                            <div key={index} className="col-3 my-3">
                                <Link to={"machine/"+index} >
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-text">
                                                <h4 className="text-center" >{item.name}</h4>
                                                <span className="badge badge-success">Available</span>
                                                <span className={["badge badge-pill badge-primary float-right", styles.number].join(' ')}>{item.number}</span>
                                            </div>
                                        </div>
                                        <img src={washerClose} className="card-img-top" alt="..." />
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>

            </div>    
        </section>
        </>
    );
};

export default LoggedHome;