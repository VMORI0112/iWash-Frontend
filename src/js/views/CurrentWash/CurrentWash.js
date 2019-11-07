import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './CurrentWash.module.css';
import Timer from '../../components/Timer/Timer';

const CurrentWash = () => {

    const {currentWashing} = useContext(UserContext); 

    console.log(currentWashing);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className="text-center">your current wash</h2>
                {!currentWashing ? 'Loading...' : currentWashing.map((item,index) => {
                    return (
                        <div key={index} className={["alert", styles.alertBlue].join(' ')} >
                            <div className="row text-center">
                                <div className={["col", styles.cycle].join(' ')}> <span role="img" aria-label="dd">💧</span> {item.cicle}</div>
                                <div className={["col", styles.time].join(' ')}> <span role="img" aria-label="dd">⏱️</span> {item.time}min</div>
                                <div className={["col", styles.number].join(' ')}> <span role="img" aria-label="ds">#️⃣</span> {item.machineNumber}</div>
                            </div>
                            <div className="text-center mt-3">
                                <Timer start={item.start} end={item.end} />
                            </div>
                            <br/>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default CurrentWash;