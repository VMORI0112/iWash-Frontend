import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import fer from '../../../img/home/fer.png';
import lav from '../../../img/home/lav.png';
import linge from '../../../img/home/linge.png';

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
                            <h4 class="textOrange">Who we are?</h4>
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

            <div className={["py-5", styles.middleInfo].join(' ')}>
                <div class="container py-xl-5 py-3">
                    <h3 class="text40px text-center textBold textWhite mb-5 pb-lg-4 pt-lg-4">
                        <span class={styles.newCust}>
                            New customers save $10
                        </span>
                        Ut enim ad nostrud ullamco laboris 
                        <br/>
                        Nisi ut aliquip ex consequat.
                    </h3>
                    <div class="buttons-w3pvt text-center mt-lg-4 pb-lg-5">
                        <Link to="/about" class={["scroll mr-3", styles.buttonStyle].join(' ')}>Read More</Link>
                        <Link to="/contact" class={["scroll",styles.buttonStyle, styles.buttonStyle2].join(' ')}>Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div class="row text-center">
                    <div class="col-lg-4 services-w3ls-grid">
                        <img src={fer} alt="" class="img-fluid" />
                        <h4 class="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 1</h4>
                        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                    </div>
                    <div class="col-lg-4 services-w3ls-grid my-lg-0 my-4">
                        <img src={lav} alt="" class="img-fluid" />
                        <h4 class="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 2</h4>
                        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                    </div>
                    <div class="col-lg-4 services-w3ls-grid">
                        <img src={linge} alt="" class="img-fluid" />
                        <h4 class="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 3</h4>
                        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;