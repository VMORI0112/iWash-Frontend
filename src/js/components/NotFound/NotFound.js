import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.not}>
            <div className={styles.notfound}>
                <div className={styles.notfound404}>
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <a href="/">Go To Homepage</a>
            </div>
        </div>
    );
};

export default NotFound;