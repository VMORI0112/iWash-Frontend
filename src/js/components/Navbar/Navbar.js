import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import coin from '../../../img/coin.png';
import avatar from '../../../img/avatar/avatar.png';

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
                            <Link className={styles.wallet} to="/">
                                $ 40
                            </Link>
                            <div className="btn-group">
                                <button className={["dropdown-toggle", styles.dropBtn].join(' ')} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={avatar} alt="avatar" width="30px" /> {firstname} {lastname}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="/" >Home</Link>
                                    <Link className="dropdown-item" to="/wallet" >Wallet</Link>
                                    <Link className="dropdown-item" to="/map" >Map</Link>
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