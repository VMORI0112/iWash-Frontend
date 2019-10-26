import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Register.module.css';

import coin from '../../../img/coin.png';

const Register = () => {
    let history = useHistory();
    const inputFname = useRef(null);
    const inputLname = useRef(null);
    const inputEmail = useRef(null);
    const inputPass = useRef(null);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const registerFormHandler = () => {
        if (!firstname) {
            inputFname.current.style.border = "1px solid red";
        } if (!lastname) {
            inputLname.current.style.border = "1px solid red";
        } if (!email) {
            inputEmail.current.style.border = "1px solid red";
        } if (!password) {
            inputPass.current.style.border = "1px solid red";
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
                <input 
                    className={styles.inputForm} 
                    type="text" 
                    placeholder="First Name"
                    ref={inputFname}
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    type="text" 
                    placeholder="Last Name"
                    ref={inputLname}
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    type="email" 
                    placeholder="Email"
                    ref={inputEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    type="password" 
                    placeholder="Password"
                    ref={inputPass}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>

                <button 
                    className={["btn",styles.buttLogin].join(' ')}
                    onClick={registerFormHandler}
                >
                    REGISTER
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