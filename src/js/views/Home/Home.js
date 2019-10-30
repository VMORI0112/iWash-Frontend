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
                <div className={styles.bannerInfo}>
                    <div className="container">
                        <div className="style-banner text-center">
                            <p className="text-li mb-2">Wash, Dry &amp; Fold</p>
                            <h3 className="text-wh font-weight-bold text-uppercase">We Are Expert Cleaner</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about py-5" id="about">
                <div className="container py-xl-5 py-lg-3">
                    <div className="row">
                        <div className="col-lg-6 about-left-w3pvt pr-lg-5">
                            <h4 className="textOrange">Who we are?</h4>
                            <h3 className="tittle-w3layouts text-uppercase mt-3">
                                Laundry and Dry 
                                <br/>
                                Cleaning Services
                            </h3>
                            <p className="para-text mt-5">
                                We are the Best Laundry Services 
                                <br/>
                                est qui dolorem Lorem int ipsum dolor.
                            </p>
                        </div>
                        <div className="col-lg-6 about-right">
                            <p className="mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo.</p>
                            <p className="mt-4 mb-5">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit
                                amet sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={["py-5", styles.middleInfo].join(' ')}>
                <div className="container py-xl-5 py-3">
                    <h3 className="text40px text-center textBold textWhite mb-5 pb-lg-4 pt-lg-4">
                        <span className={styles.newCust}>
                            New customers save $10
                        </span>
                        Ut enim ad nostrud ullamco laboris 
                        <br/>
                        Nisi ut aliquip ex consequat.
                    </h3>
                    <div className="buttons-w3pvt text-center mt-lg-4 pb-lg-5">
                        <Link to="/about" className={["scroll mr-3", styles.buttonStyle].join(' ')}>Read More</Link>
                        <Link to="/contact" className={["scroll",styles.buttonStyle, styles.buttonStyle2].join(' ')}>Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className="container py-xl-5 pb-ly-3">
                <h3 className="w3ls-title text-center font-weight-bold text-da mb-5 pb-lg-4">
                    <span className={["mb-1", styles.ourService].join(' ')}>What we offer?</span>
				    Our Services
                </h3>
                <div className="row text-center">
                    <div className="col-lg-4 services-w3ls-grid">
                        <img src={fer} alt="" className="img-fluid" />
                        <h4 className="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 1</h4>
                        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                    </div>
                    <div className="col-lg-4 services-w3ls-grid my-lg-0 my-4">
                        <img src={lav} alt="" className="img-fluid" />
                        <h4 className="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 2</h4>
                        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                    </div>
                    <div className="col-lg-4 services-w3ls-grid">
                        <img src={linge} alt="" className="img-fluid" />
                        <h4 className="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 3</h4>
                        <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                    </div>
                </div>
            </div>

            <div className="container p-2">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114937.54832567982!2d-80.21018223341697!3d25.81022472015342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1572315179765!5m2!1sen!2sus" width="100%" height="300"></iframe>
			</div>

        </section>
    );
};

export default Home;