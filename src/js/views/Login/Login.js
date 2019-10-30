import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './Login.module.css';

import coin from '../../../img/coin.png';

const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAuth} = useContext(UserContext);

    const loginFormHandler = () => {
        let userLoginData = JSON.stringify({
            "email": email,
            "password": password
        });
        fetch('http://0.0.0.0:3000/login', {
            method: 'POST',
            body: userLoginData,
            cors: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => {
                let token = response.token;
                let email = response.email;
                let firstname = response.firstname;
                let lastname = response.lastname;
                if (!token && !email && !firstname && !lastname ) {
                    alert("Sorry we couldn't find an account with that email.\n\n Try to register first.")
                } else {
                    alert('LOGIN SUCCESSFUL');
                    localStorage.setItem('token', token);
                    localStorage.setItem('email', email);
                    localStorage.setItem('firstname', firstname);
                    localStorage.setItem('lastname', lastname);
                    setAuth({
                        'token': token,
                        'email': email,
                        'firstname': firstname,
                        'lastname': lastname
                    })
                    history.push('/');
                }
            })
            .catch(error => {
                alert('Something Went Wrong, Try again');
                console.log('Error:', error);
            });
    }

    return (
        <section className={styles.section}>
            
                <img className={styles.coin} src={coin} alt="coin"/>
                <br/>
                <input 
                    className={styles.inputForm} 
                    type="email" 
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
                
                <button 
                    className={["btn",styles.buttLogin].join(' ')}
                    onClick={loginFormHandler}
                >
                    Login
                </button>

                <br/>
                <br/>
                <Link to="/" className={styles.forgotP}>
                    Forgot password?
                </Link>
           

        </section>
    );
};

export default Login;