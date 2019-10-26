import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

import coin from '../../../img/coin.png';

const Login = () => {
    return (
        <section className={styles.section}>
            
                <img className={styles.coin} src={coin} alt="coin"/>
                <br/>
                <input className={styles.inputForm} type="text" placeholder="Email" />
                <br/>
                <input className={styles.inputForm} type="text" placeholder="Password" />
                <br/>
                <button className={["btn",styles.buttLogin].join(' ')}>Login</button>
                <br/>
                <br/>
                <Link to="/" className={styles.forgotP}>
                    Forgot password?
                </Link>
           

        </section>
    );
};

export default Login;