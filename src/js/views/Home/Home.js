import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.section}>
            <div className={["text-center", styles.main].join(' ')}>
                <div class={styles.bannerInfo}>
                    <div class="container">
                        <div class="style-banner text-center">
                            <p class="text-li mb-2">Wash, Dry &amp; Fold</p>
                            <h3 class="text-wh font-weight-bold text-uppercase">We Are Expert Cleaner</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;