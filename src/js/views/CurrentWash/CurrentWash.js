import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './CurrentWash.module.css';

const CurrentWash = () => {

    const {currentWashing} = useContext(UserContext);

    // const [time, setTime] = useState(0)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTime(time + 1);
    //     },1000)
    // },[time])

    // console.log(time);  

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className="text-center">your current wash</h2>
                {!currentWashing ? 'Loading...' : currentWashing.map((item,index) => {
                    return (
                        <div key={index}>
                            {item.cicle} - start: {item.start} - End: {item.end}
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default CurrentWash;