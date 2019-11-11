import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../../UserContext';
import { usePosition } from 'use-position';
import mystyles from './Map.module.css';

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
    width: "100vw",
    height: "calc(100vh - 80px)",
    position: "absolute"
  };

const Map = () => {

    const {windowHeight} = useContext(UserContext);
    const {mapBoxPublicToken} = useContext(UserContext);
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();

    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = mapBoxPublicToken;
        const initializeMap = ({ setMap, mapContainer }) => {
          const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
            center: [-80.1281881, 25.8568052],
            zoom: 16
          });
    
          map.on("load", () => {
            setMap(map);
            map.resize();
          });
        };
    
        if (!map) initializeMap({ setMap, mapContainer });
      }, [map, mapBoxPublicToken]);

    // console.log(navigator.geolocation);

    return (
        <section className={mystyles.section} style={{minHeight: windowHeight}}>
        map here
        <br/>
        lat: {latitude} - Long: {longitude} - t: {timestamp} - acc: {accuracy} - error: {error}

        {/* <div className="container p-2">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114937.54832567982!2d-80.21018223341697!3d25.81022472015342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1572315179765!5m2!1sen!2sus" width="100%" height="300"></iframe>
		</div> */}

        <div ref={el => (mapContainer.current = el)} style={styles} />

        </section>
    );
};

export default Map;