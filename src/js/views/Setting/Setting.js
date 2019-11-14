import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './Setting.module.css';
import geeks from '../../../img/presentation/4geeks.png';

const Setting = () => {

    const {windowHeight} = useContext(UserContext);

    const presentation = () => {
        localStorage.clear();
        window.location.href = "/presentation#ten";
    }

    return (
        <section className={styles.section} style={{minHeight: windowHeight}}>
            <h1 className="text-center mb-5">Setting</h1>
            <div className="container">
                <div className={["list-group", styles.list].join(' ')}>
                    <Link to="/" className="list-group-item list-group-item-action"><i className="fas fa-user fa-2x"></i>&nbsp;Update Profile</Link>
                    <Link to="/" className="list-group-item list-group-item-action"><i className="fas fa-hand-holding-usd fa-2x"></i>&nbsp;My Wallet</Link>
                    <Link to="/" className="list-group-item list-group-item-action"><i className="fas fa-history fa-2x"></i>&nbsp;My Washing History</Link>
                    <div onClick={presentation} className={["list-group-item list-group-item-action", styles.gotopres].join(' ')}> <img src={geeks} alt="4geeks" width="50px" /> &nbsp;Back to Presentation</div>
                </div>
            </div>
        </section>
    );
};

export default Setting;