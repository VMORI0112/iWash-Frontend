import React, { useState } from 'react';
import styles from './presentation.module.css';

import geek from '../../img/presentation/4geeks.png';

const Presentation = () => {

    const [windowHeight] = useState(window.innerHeight);

    return (
        <section className={styles.section}>
            <div id="one" className={styles.firstPage} style={{height: windowHeight}}>
                <div className={styles.header}>
                    <img src={geek} width="50px" alt="mm"/>
                    <h1>iWash Smart Laundromat</h1>
                </div>
                hey one
                <br/>
                <a href="#two">next</a>
            </div>
            <div id="two" style={{height: windowHeight, backgroundColor: "white"}}>
                <h1>two page</h1>
                <img src={geek} width="50px" alt="mm"/>
                hey two
                <br/>
                <a href="#one">previous</a>
                <a href="#three">next</a>
            </div>
            <div id="three" style={{height: windowHeight, backgroundColor: "black"}}>
                <h1>three page</h1>
                <img src={geek} width="50px" alt="mm"/>
                hey three
                <br/>
                <a href="#two">previous</a>
                <a href="#four">next</a>
            </div>
            <div id="four" style={{height: windowHeight, backgroundColor: "white"}}>
                <h1>four page</h1>
                <img src={geek} width="50px" alt="mm"/>
                hey four
                <br/>
                <a href="#three">previous</a>
                <a href="#five">next</a>
            </div>
            <div id="five" style={{height: windowHeight, backgroundColor: "black"}}>
                <h1>five page</h1>
                <img src={geek} width="50px" alt="mm"/>
                hey five
                <br/>
                <a href="#four">previous</a>
            </div>
        </section>
    );
};

export default Presentation;