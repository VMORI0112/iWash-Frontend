import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './Machine.module.css';

const Machine = (props) => {

    const {info} = useContext(UserContext);

    console.log(info.washers);

    let WasherId = props.match.params.WID;

    return (
        <section className={styles.section}>
            <div className="container text-center">

                    name = {info.washers[WasherId].name}
                    <br/>
                    type = {info.washers[WasherId].type}
                    <br/>
                    busy = {info.washers[WasherId].busy}
                    <br/>
                    cold info = {info.washers[WasherId].cold[0].what}
            </div>
        </section>
    );
};

export default Machine;