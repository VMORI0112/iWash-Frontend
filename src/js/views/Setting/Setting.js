import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { UserContext } from '../../../UserContext';
import styles from './Setting.module.css';
import geeks from '../../../img/presentation/4geeks.png';

const Setting = () => {
    

    const {windowHeight} = useContext(UserContext);

    return (
        <section className={styles.section} style={{minHeight: windowHeight}}>
            <h1 className="text-center mb-5">Setting</h1>
            <div className="container">
                <div className={["list-group", styles.list].join(' ')}>
                    <Link to="/" className="list-group-item list-group-item-action"><i className="fas fa-user fa-2x"></i> &nbsp; &nbsp; Update Profile</Link>
                    <Link to="/" className="list-group-item list-group-item-action"><i className="fas fa-hand-holding-usd fa-2x"></i> &nbsp; &nbsp; My Wallet</Link>
                    <Link to="/" className="list-group-item list-group-item-action"><i className="fas fa-history fa-2x"></i> &nbsp; &nbsp; My Washing History</Link>
                    <HashLink to='/presentation#ten' className={["list-group-item list-group-item-action", styles.gotopres].join(' ')}> <img src={geeks} alt="4geeks" width="50px" /> &nbsp;Back to Presentation</HashLink>
                </div>
            </div>
        </section>
    );
};

export default Setting;