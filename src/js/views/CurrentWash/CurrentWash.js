import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './CurrentWash.module.css';
import Timer from '../../components/Timer/Timer';

const CurrentWash = () => {

    const {currentWashing} = useContext(UserContext); 

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className="text-center">your current wash</h2>
                {!currentWashing ? 'Loading...' : currentWashing.map((item,index) => {
                    return (
                        <div key={index} className="alert alert-primary" >
                            <h4>Cycle: {item.cicle} || Time: {item.time} minutes</h4>
                            start: {item.start} - End: {item.end}
                            {item.time}
                            <br/>
                            <Timer start={item.start} end={item.end} />
                            <br/>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default CurrentWash;