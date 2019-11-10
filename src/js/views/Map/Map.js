import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './Map.module.css';

const Map = () => {

    const {windowHeight} = useContext(UserContext);

    return (
        <section className={styles.section} style={{minHeight: windowHeight}}>
        map here
        <br/>
        {windowHeight}
        </section>
    );
};

export default Map;