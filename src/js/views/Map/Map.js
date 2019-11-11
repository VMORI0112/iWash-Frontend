import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../../UserContext';
import { usePosition } from 'use-position';
import mystyles from './Map.module.css';

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
    width: "80%",
    height: "50%",
    position: "absolute",
    left: "10%",
    top: "20%"
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
        
        lat: {latitude} - Long: {longitude} - t: {timestamp} - acc: {accuracy} - error: {error}

        <h3 className="text-center">Laundromat Uses iWash App Arround You</h3>

        <div ref={el => (mapContainer.current = el)} style={styles} />

        </section>
    );
};

export default Map;