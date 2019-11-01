import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

import styles from './LoggedHome.module.css';
// import washerOpen from '../../../img/washing/w1.png';
import washerClose from '../../../img/washing/w2.png';


const LoggedHome = () => {

    const [washerContainer, setWasherContainer] = useState('');
    const [dryerContainer, setDryerContainer] = useState('d-none');

    const washerHandle = () => {
        setWasherContainer('');
        setDryerContainer('d-none');
    }
    const dryerHandle = () => {
        setWasherContainer('d-none');
        setDryerContainer('');
    }

    const {washersData} = useContext(UserContext);
    const {dryersData} = useContext(UserContext);

    return (
        <>
        <section className={styles.section}>
            <h1 className="text-center">Laundromat</h1>
            <div className="container">
                <div className="text-center">
                    <button onClick={washerHandle} className={styles.btnIwash}>Wahers</button>
                    <button onClick={dryerHandle} className={styles.btnIwash}>Dryers</button>
                </div>

                <div className={["row", washerContainer].join(' ')}>
                    {!washersData ? 'loading' : washersData.map((item,index) => {
                        return (
                            <div key={index} className="col-3 my-3">
                                <Link className={styles.links} to={"machine/"+index} >
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

                <div className={["row", dryerContainer].join(' ')}>
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