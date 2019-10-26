import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

import coin from '../../../img/coin.png';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className={styles.section}>
            
                <img className={styles.coin} src={coin} alt="coin"/>
                <br/>
                <input 
                    className={styles.inputForm} 
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
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