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

            <div class="about py-5" id="about">
                <div class="container py-xl-5 py-lg-3">
                    <div class="row">
                        <div class="col-lg-6 about-left-w3pvt pr-lg-5">
                            <h4 class="sub-tittle-w3layouts let">Who we are?</h4>
                            <h3 class="tittle-w3layouts text-uppercase mt-3">
                                Laundry and Dry 
                                <br/>
                                Cleaning Services
                            </h3>
                            <p class="para-text mt-5">
                                We are the Best Laundry Services 
                                <br/>
                                est qui dolorem Lorem int ipsum dolor.
                            </p>
                        </div>
                        <div class="col-lg-6 about-right">
                            <p class="mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo.</p>
                            <p class="mt-4 mb-5">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit
                                amet sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;