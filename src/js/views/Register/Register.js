import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Register.module.css';

import coin from '../../../img/coin.png';

const Register = () => {
    let history = useHistory();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg1, setMsg1] = useState('');
    const [msg2, setMsg2] = useState('');
    const [msg3, setMsg3] = useState('');
    const [msg4, setMsg4] = useState('');

    const registerFormHandler = () => {
        if (!firstname) {
            setMsg1("Enter your First Name!")
        } if (!lastname) {
            setMsg2("Enter your Last Name!")
        } if (!email) {
            setMsg3("Enter your Email!") 
        } if (!password) {
            setMsg4("Enter your Password!") 
        } else {

            let userRegisterData = JSON.stringify({
                first_name: firstname,
                last_name: lastname,
                email: email,
                password: password
            });
            fetch('http://0.0.0.0:3000/users', {
                method: 'POST',
                body: userRegisterData,
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(response => {
                    if (response.token) {
                        alert('REGISTER SUCCESSFUL');
                        history.push('/login');
                    } else {
                        alert('Something went wrong')
                    }
                })
                .catch(error => alert('Error:', error));
            }
    }

    return (
        <section className={styles.section}>
            
                <img className={styles.coin} src={coin} alt="coin"/>
                <br/>
                <small>{msg1}</small>
                <input 
                    className={styles.inputForm} 
                    type="text" 
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    type="text" 
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <small>{msg2}</small>
                <br/>
                <small>{msg3}</small>
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
                <small>{msg4}</small>
                <br/>

                <button 
                    className={["btn",styles.buttLogin].join(' ')}
                    onClick={registerFormHandler}
                >
                    Login
                </button>

                <br/>
                <br/>
                <Link to="/login" className={styles.forgotP}>
                    Already have an account? Login here
                </Link>
           

        </section>
    );
};

export default Register;