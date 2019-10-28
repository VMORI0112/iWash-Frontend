import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.section}>
            <div className={["text-center", styles.main].join(' ')}>
                <h1>Welcome</h1>
            </div>
        </section>
    );
};

export default Home;