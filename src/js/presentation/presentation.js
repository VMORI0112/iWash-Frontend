import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import styles from './presentation.module.css';

import geek from '../../img/presentation/4geeks.png';
import bootstrap from '../../img/presentation/bootstrap.png';
import js from '../../img/presentation/js.png';
import python from '../../img/presentation/python.png';
import react from '../../img/presentation/react.png';
import demo from '../../img/presentation/demo.png';
import marcelo from '../../img/presentation/marcelo.jpg';
import alejandro from '../../img/presentation/alejandro.jpg';
import paolo from '../../img/presentation/paolo.png';
import hernan from '../../img/presentation/hernan.jpeg';
import colby from '../../img/presentation/colby.jpeg';
import bridget from '../../img/presentation/bridget.jpeg';
import daniela from '../../img/presentation/daniela.jpeg';
import iphone from '../../img/presentation/iphone.png';
import washer from '../../img/presentation/w2.png';
import nocoin from '../../img/presentation/nocoin.png';
import nocard from '../../img/presentation/nocard.png';
import angry from '../../img/presentation/angry.png';
import guyPhone from '../../img/presentation/guyPhone.png';
import idea from '../../img/presentation/idea.png';

import angryComputer from '../../img/presentation/angryComputer.png';
import happyCoder from '../../img/presentation/happyCoder.png';
import school from '../../img/presentation/school.png';

import google from '../../img/presentation/google.jpg';
import html from '../../img/presentation/html.png';
import paypal from '../../img/presentation/paypal.png';
import raspberry from '../../img/presentation/raspberry.png';
import flask from '../../img/presentation/flask.png';
import mysql from '../../img/presentation/mysql.png';

const Presentation = () => {

    const {windowHeight} = useContext(UserContext);

    return (
        <section className={styles.section}>
            <div id="one" className={styles.firstPage} style={{height: windowHeight}}>
                <div className={styles.headerPage1}>
                    <div className={styles.icon4geeks}>
                        <img src={geek} width="100px" alt="mm"/>
                    </div>
                    <h1><i className={["fas fa-info align-top", styles.i].join(' ')}></i>Wash Smart Laundromat</h1>
                    <br/><br/>
                    <h2 className="text-right p-5">
                        Victor F. Mori And Samir Benzada
                    </h2>
                </div>
                <h2 className="text-center pt-4">Laundry services web application</h2>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#two" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>
            <div id="two" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>TABLE OF CONTENTS</h1>
                </div>
                <ol className={["mt-5",styles.listNumber].join(' ')}>
                    <li>
                        OUR EXPERIENCE AT 4GEEKS ACADEMY
                    </li>
                    <li>
                        WHAT IS IWASH
                    </li>
                    <li>
                        HOW IWASH WORKS
                    </li>
                    <li>
                        WHY IWASH?
                    </li>
                    <li>
                        BEHIND THE PROJECT
                    </li>
                    <li>
                        HOW WAS IT BUILT
                    </li>
                    <li>
                        DEMO TIME
                    </li>
                </ol>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#one" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#three" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>
            <div id="three" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>OUR EXPERIENCE AT 4GEEKS ACADEMY</h1>
                </div>
                <ul className={["mt-5",styles.listExperience].join(' ')}>
                    <li>
                        We enjoyed all my learning time in 4Geeks Academy, because everyday we did learn new and interesting things for our career.
                    </li>
                    <li>
                        We really liked the fact that we have 1 teacher for 2 students, that make it very easy to learn.
                    </li>
                    <li>
                        They Have amazing teachers.
                    </li>
                </ul>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#two" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#four" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="four" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>WHAT IS &nbsp; <i className={["fas fa-info align-top", styles.i].join(' ')}></i>Wash</h1>
                </div>
                <h1 className="text-center mt-2">Make Your Laundry Easier, Smarter and Efficient.</h1>
                <div className="row mt-2">
                    <div className="col text-right">
                        <img src={iphone} width="45%" alt="iphone"/>
                    </div>

                    <div className="col text-left">
                        <img src={washer} width="35%" alt="iphone"/>
                    </div>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#three" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#five" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="five" className='pt-5' style={{height: windowHeight}}>
            <div className={styles.header}>
                    <h1 className={styles.title}>HOW &nbsp; <i className={["fas fa-info align-top", styles.i].join(' ')}></i>Wash WORKS</h1>
                </div>
                <h1 className="text-center mt-2">Website/Application Helps you forget the complexity and hustle of using Coins and Cards.</h1>
                <div className="row mt-2 text-center">
                    <div className="col">
                        <img src={nocoin} width="45%" alt="iphone"/>
                    </div>
                    <div className="col">
                        <img src={nocard} width="55%" alt="iphone"/>
                    </div>
                    <div className="col">
                        <img src={iphone} width="55%" alt="iphone"/>
                    </div>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#four" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#six" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="six" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>WHY &nbsp; <i className={["fas fa-info align-top", styles.i].join(' ')}></i>Wash?</h1>
                </div>
                <h1 className="text-center mt-2">When you forgot your wallet and or your card to pay, you still can use your phone!</h1>
                <div className="row mt-2 text-center">
                    <div className="col">
                        <img src={angry} width="45%" alt="iphone"/>
                    </div>
                    <div className="col">
                        <img src={idea} width="45%" alt="iphone"/>
                    </div>
                    <div className="col">
                        <img src={guyPhone} width="105%" alt="iphone"/>
                    </div>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#five" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#seven" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="seven" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>BEHIND THE PROJECT</h1>
                </div>
                <h1 className="text-center mt-2">OUR STORY...</h1>
                <div className="row mt-2 text-center">
                    <div className="col">
                        <img src={angryComputer} width="55%" alt="iphone"/>
                        <br/>
                        <h3>Before 4Geeks</h3>
                    </div>
                    <div className="col">
                        <img src={school} width="55%" alt="iphone"/>
                        <br/>
                        <h3>4Geeks Academy</h3>
                    </div>
                    <div className="col">
                        <img src={happyCoder} width="55%" alt="iphone"/>
                        <br/>
                        <h3>After 4Geeks</h3>
                    </div>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#six" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#height" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="height" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>HOW WAS IT BUILT</h1>
                </div>
                <div className="m-3 text-center">
                    <img className="m-2" src={html} alt="b" width="100px" />
                    <img className="m-2" src={bootstrap} alt="b" width="100px" />
                    <img className="m-2" src={js} alt="b" width="100px" />
                    <img className="m-2" src={react} alt="b" width="100px" />
                    <img className="m-2" src={python} alt="b" width="100px" />
                    <img className="m-2" src={flask} alt="b" width="100px" />
                    <img className="m-2" src={mysql} alt="b" width="100px" />
                    <img className="m-2" src={raspberry} alt="b" width="100px" />
                    <img className="m-2" src={paypal} alt="b" width="100px" />
                    <img className="m-2" src={google} alt="b" width="100px" />
                </div>
                <div className="container">
                    <ul className={["mt-5",styles.listExperience].join(' ')}>
                        <li>
                            We are using HTML, CSS, Bootstrap, React.js (javaScript), Phyton3/Flask, MySql Database and Raspberry Pi.
                        </li>
                        <li>
                            We choose to use as Third Party, Google Maps, PayPal payment method.
                        </li>
                    </ul>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#seven" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#nine" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="nine" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>DEMO TIME</h1>
                </div>
                <div className="container mt-2">
                    <img src={demo} alt="demo" width="100%" height="100%" />
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="/" className={["scroll mr-3", styles.buttonStyle].join(' ')} style={{color:"black"}}>DEMO</a>
                    <a href="#height" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#ten" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="ten" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>THANK YOU</h1>
                </div>
                <div className="container">
                    <ul className={["mt-5",styles.listExperience].join(' ')}>
                        <h2>A Big Thank you to 4Geeks Academy <img src={geek} width="100px" alt="mm"/></h2>
                        <li>
                            <img src={marcelo} width="40px" alt="marcelo"/> Marcelo and <img src={alejandro} width="40px" alt="alejandro"/> Alejandro.
                        </li>
                        <li>
                        <img src={colby} width="40px" alt="colby"/> Colby, <img src={paolo} width="40px" alt="paolo"/> Paolo, <img src={hernan} width="40px" alt="marcelo"/> Hernán.
                        </li>
                        <li>
                        <img src={daniela} width="40px" alt="marcelo"/> Daniela and <img src={bridget} width="40px" alt="marcelo"/> Bridget.
                        </li>
                    </ul>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#nine" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                </div>
            </div>
                
            
        </section>
    );
};

export default Presentation;