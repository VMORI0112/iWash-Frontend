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

        <div className="container p-2">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114937.54832567982!2d-80.21018223341697!3d25.81022472015342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1572315179765!5m2!1sen!2sus" width="100%" height="300"></iframe>
		</div>

        </section>
    );
};

export default Map;