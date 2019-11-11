import React, { useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './Register.module.css';
import swal from 'sweetalert';

import coin from '../../../img/coin.png';

const Register = () => {
    
    let history = useHistory();

    const {backen_url} = useContext(UserContext);
    const {windowHeight} = useContext(UserContext);

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
            swal("First Name Cannot be Empty", "Enter your First Name", "error", {
                button: "OK",
              })
        } else if (!lastname) {
            inputLname.current.style.border = "1px solid red";
            swal("Last Name Cannot be Empty", "Enter your Last Name", "error", {
                button: "OK",
              })
        } else if (!email) {
            inputEmail.current.style.border = "1px solid red";
            swal("Email Cannot be Empty", "Enter your Email", "error", {
                button: "OK",
              })
        } else if (!password) {
            inputPass.current.style.border = "1px solid red";
            swal("Password Cannot be Empty", "Enter your Password", "error", {
                button: "OK",
              })
        } else {

            let userRegisterData = JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            });
            // console.log(userRegisterData)
            fetch(backen_url+'/register', {
                method: 'POST',
                body: userRegisterData,
                // cors: 'no-cors',
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(res => {
                    console.log(res);
                    swal("ACCOUNT CREATED", "Welcome to iWash", "success", {
                        button: "LOGIN NOW",
                      }).then(() => {
                            history.push('/login');
                          });
                })
                .catch(error => {
                    console.log('Error:', error);
                    swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
                        button: "OK",
                      })
                    // alert("error", JSON.stringify(error));
                });
            }
    }

    return (
        <section className={styles.section} style={{minHeight: windowHeight}}>
            
                <img className={styles.coin} src={coin} alt="coin"/>
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="firstname"
                    type="text" 
                    placeholder="First Name"
                    ref={inputFname}
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="lastname"
                    type="text" 
                    placeholder="Last Name"
                    ref={inputLname}
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="email"
                    type="email" 
                    placeholder="Email"
                    ref={inputEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="password"
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