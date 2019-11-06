import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './CurrentWash.module.css';

const CurrentWash = () => {

    const {currentWashing} = useContext(UserContext);
    
    // currentWashing && console.log(JSON.parse(currentWashing));

    return (
        <section className={styles.section}>
            hey current wash
            {!currentWashing ? 'Loading...' : currentWashing.map((item,index) => {
                return (
                    <div key={index}>
                        {item.cicle} - {item.end}
                    </div>
                )
            })}
        </section>
    );
};

export default CurrentWash;