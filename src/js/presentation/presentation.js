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
                        Web application to use and control the laundry services throughout the Internet, and using your mobile phone.
                    </li>
                    <li>
                        Team Members: Samir Benzaba/Victor Mori. 
                    </li>
                    <li>
                        Design views and tables , define Raspberry Pi interface, coding frontend and backend, coding interface and test all the project.
                    </li>
                    <li>
                        Platform : Gitpod, HTML, CSS, javaScript, React.js, Python/Flask, MySql Database and Raspberry Pi.
                    </li>
                    <li>
                        Challenges: Use MySQL Database with the backend, and Raspberry Pi interface.
                    </li>
                    <li>
                        Next feature: Prepare the web application to be loaded on the mobile phone.
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
                        I did enjoy all my learning time in 4Geeks Academy, because everyday I did learn new and interesting things for my career.
                    </li>
                    <li>
                        I really liked the fact that we have one teacher for 2 students, that make it very easy to learn.
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
                <ul className={["mt-5",styles.listExperience].join(' ')}>
                    <li>
                        iWash is a web application throughout you can handle your laundry services using the internet. You can , use and control the washer and dryer machines through your mobile phone.For example you can  to start the washing cycle as  your needs and verify the remaining time for each machine that you did choosed. Also, you can add money from your credit card to make your payments.
                    </li>
                    <li>
                        My classmate  Samir and I, we both did use the laundry coins service before, and we got coincidence to found the same problem: sometimes there are no coins anywhere to use the laundry service. 
                        That was the reason that we decided to make a web application to solve that problem and provide more facilities to the users.
                    </li>
                </ul>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#three" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#five" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="five" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>BEHIND THE PROJECT</h1>
                </div>
                <ul className={["mt-5",styles.listExperience].join(' ')}>
                    <li>
                        (Victor) Before I started the 4Geeks Academy program, I was an Analyst/Program for an iSeries environment, using the programming languages as RPG-IV and Free-Format. I decided to update my programming skills with the new technologies and 4Geeks Academy was a good decision.  Because, right now I can use HTML, CSS, javaScript and React.js as Frontend and Phyton/Flask and MySql as Backend, to build web applications. 
                    </li>
                    <li>
                        (Samir) Before I started the 4Geeks Academy program, I was coding with Html,Css and PHP. I learn by myself, it was very hard specially when you struggle. So I decide to have help from the Best School in Miami. 
                    </li>
                    <li>
                        90% of current jobs require digital skills. 
                    </li>
                    <li>
                        There are 500K open positions in the US for software developers. 
                    </li>
                </ul>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#four" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#six" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="six" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>HOW WAS IT BUILT</h1>
                </div>
                <div className="m-3">
                    <img src={bootstrap} alt="b" width="200px" />
                    <img src={js} alt="b" width="100px" />
                    <img src={python} alt="b" width="200px" />
                    <img src={react} alt="b" width="100px" />
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
                    <a href="#five" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#seven" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="seven" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>DEMO TIME</h1>
                </div>
                <div className="container mt-2">
                    <img src={demo} alt="demo" width="100%" height="100%" />
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="/" className={["scroll mr-3", styles.buttonStyle].join(' ')} style={{color:"black"}}>DEMO</a>
                    <a href="#six" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#height" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="height" className='pt-5' style={{height: windowHeight}}>
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
                    <a href="#seven" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#nine" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>
                
            
        </section>
    );
};

export default Presentation;