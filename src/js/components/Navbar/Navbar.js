import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import coin from '../../../img/coin.png';

const IwashNavBar = () => {

    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    const token = localStorage.getItem('token');

    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarI].join(' ')}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={coin} width="30" height="30" className="d-inline-block align-top" alt="coin"/>
                    &nbsp;
                    <i className="fas fa-info"></i>
                    <span className={styles.wash}>WASH</span>
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    {/* <li><a href="//">Home</a></li>
                    <li><a href="//">Page 1</a></li>
                    <li><a href="//">Page 2</a></li> */}
                    {!token && !firstname && !lastname ?
                        <li>
                            <Link to="/login" className={["btn", styles.btnGreen].join(' ')}> 
                                Login
                            </Link>
                            <Link to="/register" className={["btn", styles.btnGreen].join(' ')}> 
                                Register
                            </Link>
                        </li>
                    : 
                        <li>
                        <Link to="/login"> 
                            {firstname} {lastname}
                        </Link>
                </li>
                    }
                </ul>
            </div>
        </nav>
        </>
    );
};

export default IwashNavBar;