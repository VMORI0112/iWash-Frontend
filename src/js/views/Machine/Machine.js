import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './Machine.module.css';

const Machine = (props) => {

    const {info} = useContext(UserContext);

    return (
        <section className={styles.section}>
        machine = {info.washers[props.match.params.WID].name}
        </section>
    );
};

export default Machine;