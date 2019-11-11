import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './Dryers.module.css';
import swal from 'sweetalert';


import washerClose from '../../../img/washing/w2.png';

const Dryers = (props) => {

    const {backen_url} = useContext(UserContext);

    let history = useHistory();

    let user_id = localStorage.getItem('userID');
    let user_email = localStorage.getItem('email');

    const {dryersData} = useContext(UserContext);
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
        let machineId = dryersData[WasherId].id;
        let locationNum = dryersData[WasherId].locationNum;
        let numMachine = dryersData[WasherId].number;
        let comp = 'no';
        let start_at = Date.now();
        let end_at = (Date.now() + ((Number(time)*60)*1000))

        console.log('the machine number  '+numMachine);

        let washingNow = JSON.stringify({
            userID: user_id,
            userEmail: user_email,
            machineId: machineId,
            machineNumber: numMachine,
            locationNum: locationNum,
            price: price,
            cicle: cycle,
            time: time,
            start_at: start_at,
            end_at: end_at,
            cycleComplete: comp
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
                fetch(backen_url+'/start_washing',{
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
                                    <h4 className="text-center" >{dryersData[WasherId].name}</h4>
                                    <div className="row">
                                        <div className="col">
                                            <span className={["badge badge-success m-1", styles.available].join(' ')}>Available</span>
                                        </div>
                                        <div className="col">
                                            <span className={["badge badge-pill badge-primary", styles.number].join(' ')}>{dryersData[WasherId].number}</span>
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
                                onClick={() => modalToggle(dryersData[WasherId].cicle, dryersData[WasherId].price,dryersData[WasherId].time)} 
                                className={["btn col-sm-12 col-md-5 col-lg-5 m-1", styles.btnGreen].join(' ')}
                            > 
                                <i style={{color: "black"}}>{dryersData[WasherId].cicle}</i>
                                <br/>
                                <span role="img" aria-label="time">&#128336;</span>  {dryersData[WasherId].time} min
                                <br/> 
                                <h3><span className="badge badge-success"><span role="img" aria-label="price">&#128178;</span> {dryersData[WasherId].price}</span></h3>
                               
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* MODAL CONFIRMATION */}
            <div className={["modal", modalVisible].join(' ')}>
                <div className="modal-content">
                    <span onClick={modalToggle} className="close">&times;</span>
                    <h1 className="text-center" >{dryersData[WasherId].name} Number: {dryersData[WasherId].number}</h1>
                    <div className="alert alert-warning text-center" role="alert">
                        <i className="m-3" style={{color: "black", fontWeight: "bold", fontSize: "24px"}}> {modalCycle} </i>
                        <span className="m-3"><span role="img" aria-label="time">&#128336;</span> {modalTime} minutes</span>
                        <span className="badge badge-success"><span role="img" aria-label="time">&#128178;</span> {modalPrice} </span>
                    </div>
                   <div className="alert alert-danger ml-5">
                        <p>1 - Make Sure the Dryer Machine is Loaded</p>
                        <p>2 - Insert sheets softener</p>
                        <p>3 - Make sure the door is closed</p>
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

export default Dryers;