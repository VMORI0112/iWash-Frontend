import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import { usePosition } from 'use-position';
import styles from './Map.module.css';

const Map = () => {

    const {windowHeight} = useContext(UserContext);
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();

    // console.log(navigator.geolocation);

    return (
        <section className={styles.section} style={{minHeight: windowHeight}}>
        map here
        <br/>
        lat: {latitude} - Long: {longitude} - t: {timestamp} - acc: {accuracy} - error: {error}
        </section>
    );
};

export default Map;