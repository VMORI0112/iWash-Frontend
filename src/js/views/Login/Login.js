import React from 'react';
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
                <button>Login</button>
                <br/>
                <br/>
                Forgot password?
           

        </section>
    );
};

export default Login;