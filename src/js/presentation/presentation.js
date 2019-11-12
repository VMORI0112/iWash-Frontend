import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import styles from './presentation.module.css';

import geek from '../../img/presentation/4geeks.png';
import bootstrap from '../../img/presentation/bootstrap.png';
import js from '../../img/presentation/js.png';
import python from '../../img/presentation/python.png';
import react from '../../img/presentation/react.png';

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
                        I really liked the fact that we have one teacher for 2 students, that make it very easier to learn.
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
                    <h1 className={styles.title}>TITLE</h1>
                </div>
                <ul className={["mt-5",styles.listExperience].join(' ')}>
                    <li>
                        text here
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
                    <h1 className={styles.title}>TITLE</h1>
                </div>
                <img src={bootstrap} alt="b" width="200px" />
                <img src={js} alt="b" width="100px" />
                <img src={python} alt="b" width="200px" />
                <img src={react} alt="b" width="100px" />
                <ul className={["mt-5",styles.listExperience].join(' ')}>
                    <li>
                        list here
                    </li>
                </ul>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#five" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#seven" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="seven" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>TITLE</h1>
                </div>
                <ul className={["mt-5",styles.listExperience].join(' ')}>
                    <li>
                        list here
                    </li>
                </ul>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#six" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#height" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="height" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>TITLE</h1>
                </div>
                <ul className={["mt-5",styles.listExperience].join(' ')}>
                    <li>
                        list here
                    </li>
                </ul>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#seven" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#nine" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>
                
            <div id="nine" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>TITLE</h1>
                </div>
                <ul className={["mt-5",styles.listExperience].join(' ')}>
                    <li>
                        list here
                    </li>
                </ul>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#three" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                </div>
            </div>
        </section>
    );
};

export default Presentation;