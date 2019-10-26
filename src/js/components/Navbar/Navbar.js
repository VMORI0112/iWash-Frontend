import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import coin from '../../../img/coin.png';

const IwashNavBar = () => {
    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarI].join(' ')}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={coin} width="30" height="30" className="d-inline-block align-top" alt="coin"/>
                    &nbsp;IWASH
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    {/* <li><a href="//">Home</a></li>
                    <li><a href="//">Page 1</a></li>
                    <li><a href="//">Page 2</a></li> */}
                    <li>
                        <Link to="/login" className={["btn", styles.btnGreen].join(' ')}> 
                            Login
                        </Link>
                        <Link to="/register" className={["btn", styles.btnGreen].join(' ')}> 
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default IwashNavBar;