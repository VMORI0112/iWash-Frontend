import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import coin from '../../../img/coin.png';
import geek from '../../../img/presentation/4geeks.png';

const IwashNavBar = () => {
    
    let tokenAuth = localStorage.getItem('token');
    let firstname = localStorage.getItem('firstname');
    let lastname = localStorage.getItem('lastname');
    let avatar = localStorage.getItem('avatar');
    let wallet = localStorage.getItem('wallet');

    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarI].join(' ')}>
            <div className="container">
                <Link className="navbar-brand mobile" to="/">
                    <img src={coin} width="30" height="30" className="d-inline-block align-top" alt="coin"/>
                    &nbsp;
                    <i className="fas fa-info"></i>
                    <span className={styles.wash}>Wash</span>
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    {!tokenAuth ?
                        <li>
                            <Link to="/login" className={["btn", styles.btnGreen].join(' ')}> 
                                Login
                            </Link>
                            <Link to="/register" className={["btn", styles.btnGreen].join(' ')}> 
                                Register
                            </Link>
                            <Link to="/presentation" className={["btn", styles.btnGreen].join(' ')}> 
                                <img src={geek} alt="4geeks" width="25px" />
                            </Link>
                        </li>
                    : 
                        <li>
                            <Link className={styles.wallet} to="/wallet">
                                $ {wallet}
                            </Link>
                            <div className="btn-group">
                                <button className={["dropdown-toggle", styles.dropBtn].join(' ')} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="avatar" width="30px" /> {firstname} {lastname}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="/" >Home</Link>
                                    <Link className="dropdown-item" to="/wallet" >Add Money</Link>
                                    <Link className="dropdown-item" to="/map" >Stores</Link>
                                    <Link className="dropdown-item" to="/current-wash" >Current Wash</Link>
                                    <Link className="dropdown-item" to="/setting" >Setting</Link>
                                    {/* <Link className="dropdown-item" to="/rasp" >RaspberryPi</Link> */}
                                    <button 
                                        className="dropdown-item" 
                                        onClick={async () => {
                                            localStorage.clear();
                                            window.location.href = "/";
                                        }}
                                    >
                                        LogOut
                                    </button>
                                </div>
                            </div>
                        </li>
                    }
                </ul>
            </div>
        </nav>
        </>
    );
};

export default IwashNavBar;