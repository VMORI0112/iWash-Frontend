import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './Washers.module.css';
import swal from 'sweetalert';


import washerClose from '../../../img/washing/w2.png';

const Machine = (props) => {

    let history = useHistory();

    let user_id = localStorage.getItem('userID');
    let user_email = localStorage.getItem('email');

    const {washersData} = useContext(UserContext);
    const [modalVisible, setModalVisible] = useState('invisible');

    const [modalCycle, setCycle] = useState('');
    const [modalPrice, setPrice] = useState('');
    const [modalTime, setTime] = useState('');

    const modalToggle = (cycle, price, time) => {
        setCycle(modalCycle ? "" : cycle);
        setPrice(modalPrice ? "" : price);
        setTime(modalTime ? "" : time);
        setModalVisible(modalVisible === 'invisible' ? 'visible' : 'invisible');
    }

    const startMachine = (cycle, price, time) => {
        console.log(cycle);
        let machineId = washersData[WasherId].id;
        let locationNum = washersData[WasherId].locationNum;
        let start_at = Date.now();
        let end_at = (Date.now() + ((Number(time)*60)*1000))

        let washingNow = JSON.stringify({
            machineId: machineId,
            userID: user_id,
            userEmail: user_email,
            locationNum: locationNum,
            price: price,
            cicle: cycle,
            time: time,
            start_at: start_at,
            end_at: end_at
        })
        
        modalToggle();
        // to have the right address ip, type in rasp terminal: ifconfig wlan0
        // once you get that address, change it here and in the rasp app.py
        // fetch('http://172.16.100.7:3000/iwash',{
        //     method: 'POST',
        //     body: JSON.stringify({
        //         "action": cycle,
        //         "msg": cycle+" WASHING"
        //     }),
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res.msg);
        //     if (res.msg === 'success') {
                fetch('http://iwash-backend.herokuapp.com/start_washing',{
                    method: 'POST',
                    cors: '*cors',
                    body: washingNow,
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                  .then(res => console.log(res))
                  .catch(error => console.log(error));
                // console.log(washingNow);

                swal("The Machine Started " , "You can go grab a coffee and come back when it's over", "success", {
                    button: "Let iWash Wash",
                  }).then(() => {
                    history.push('/current-wash');
                      });

        //     } else {
        //         swal("Something Went Wrong!", "Try again!", "error", {
        //             button: "OK",
        //           })
        //     }
        // })
        // .catch(error => {
        //     swal("Error!", JSON.stringify("error: => "+ error), "error", {
        //         button: "OK",
        //       })
        //     console.log('error: ', error)
        // });
    }

    let WasherId = props.match.params.WID;

    return (
        <section className={styles.section}>
            <div className="container text-center">
                <div className="row">
                    <div className="col">

                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    <h4 className="text-center" >{washersData[WasherId].name}</h4>
                                    <div className="row">
                                        <div className="col">
                                            <span className={["badge badge-success m-1", styles.available].join(' ')}>Available</span>
                                        </div>
                                        <div className="col">
                                            <span className={["badge badge-pill badge-primary", styles.number].join(' ')}>{washersData[WasherId].number}</span>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <img src={washerClose} className="card-img-top" alt="name" />
                        </div>
                            
                    </div>
                    <div className="col">
                        <h3>Choose Your Cycle:</h3>
                        <div className="row">

                            <div 
                                onClick={() => modalToggle(washersData[WasherId].cicle_1, washersData[WasherId].price_1,washersData[WasherId].time_1)} 
                                className={["btn col-sm-12 col-md-5 col-lg-5 m-1", styles.btnGreen].join(' ')}
                            > 
                                <i style={{color: "black"}}>{washersData[WasherId].cicle_1}</i>
                                <br/>
                                <span role="img" aria-label="time">&#128336;</span>  {washersData[WasherId].time_1} min
                                <br/> 
                                <h3><span className="badge badge-success"><span role="img" aria-label="price">&#128178;</span> {washersData[WasherId].price_1}</span></h3>
                               
                            </div>

                            <div 
                                onClick={() => modalToggle(washersData[WasherId].cicle_2,washersData[WasherId].price_2,washersData[WasherId].time_2)} 
                                className={["btn col-sm-12 col-md-5 col-lg-5 m-1", styles.btnGreen].join(' ')}
                            >
                                
                                    <i style={{color: "black"}}>{washersData[WasherId].cicle_2} </i>
                                    <br/>
                                    <span role="img" aria-label="time">&#128336;</span> {washersData[WasherId].time_2} min
                                    <br/> 
                                    <h3><span className="badge badge-success"><span role="img" aria-label="time">&#128178;</span> {washersData[WasherId].price_2}</span></h3>
                               
                            </div>

                            <div 
                                onClick={() => modalToggle(washersData[WasherId].cicle_3,washersData[WasherId].price_3,washersData[WasherId].time_3)} 
                                className={["btn col-sm-12 col-md-5 col-lg-5 m-1", styles.btnGreen].join(' ')}
                            >   
                                <i style={{color: "black"}}>{washersData[WasherId].cicle_3}</i>
                                <br/>
                                <span role="img" aria-label="time">&#128336;</span> {washersData[WasherId].time_3} min
                                <br/> 
                                <h3><span className="badge badge-success"><span role="img" aria-label="time">&#128178;</span> {washersData[WasherId].price_3}</span></h3>
                            </div>

                            <div 
                                onClick={() => modalToggle(washersData[WasherId].cicle_4,washersData[WasherId].price_4,washersData[WasherId].time_4)} 
                                className={["btn col-sm-12 col-md-5 col-lg-5 m-1", styles.btnGreen].join(' ')}
                            > 
                                <i style={{color: "black"}}>{washersData[WasherId].cicle_4}</i>
                                <br/>
                                <span role="img" aria-label="time">&#128336;</span> {washersData[WasherId].time_4} min
                                <br/> 
                                <h3><span className="badge badge-success"><span role="img" aria-label="time">&#128178;</span> {washersData[WasherId].price_4}</span></h3>
                            </div>

                            <div 
                                onClick={() => modalToggle(washersData[WasherId].cicle_5,washersData[WasherId].price_5,washersData[WasherId].time_5)} 
                                className={["btn col-sm-12 col-md-5 col-lg-5 m-1", styles.btnGreen].join(' ')}
                            >
                                <i style={{color: "black"}}>{washersData[WasherId].cicle_5} </i>
                                <br/>
                                <span role="img" aria-label="time">&#128336;</span> {washersData[WasherId].time_5} min
                                <br/> 
                                <h3><span className="badge badge-success"><span role="img" aria-label="time">&#128178;</span> {washersData[WasherId].price_5}</span></h3> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* MODAL CONFIRMATION */}
            <div className={["modal", modalVisible].join(' ')}>
                <div className="modal-content">
                    <span onClick={modalToggle} className="close">&times;</span>
                    <h1 className="text-center" >{washersData[WasherId].name} Number: {washersData[WasherId].number}</h1>
                    <div className="alert alert-warning text-center" role="alert">
                        <i className="m-3" style={{color: "black", fontWeight: "bold", fontSize: "24px"}}> {modalCycle} </i>
                        <span className="m-3"><span role="img" aria-label="time">&#128336;</span> {modalTime} minutes</span>
                        <span className="badge badge-success"><span role="img" aria-label="time">&#128178;</span> {modalPrice} </span>
                    </div>
                   <div className="alert alert-danger ml-5">
                        <p>1 - make sure the washing machine is loaded</p>
                        <p>2 - insert detergent / softener</p>
                        <p>3 - make sure the door is closed</p>
                   </div>
                   
                    <h3 className="text-center">Are you ready to start?</h3>
                    <div className="row">
                        <div className="col text-right">
                            <button 
                                onClick={modalToggle} 
                                className="btn btn-danger"
                            >
                                NO, CANCEL
                            </button>
                        </div>
                        <div className="col text-left">
                            <button 
                                onClick={() => startMachine(modalCycle, modalPrice, modalTime)} 
                                className="btn btn-success"
                            >
                                YES, START
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            

        </section>
    );
};

export default Machine;