import React, { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from '../../../UserContext'; 
import styles from './Checkout.module.css';
import swal from 'sweetalert';

import cashSound from '../../../sounds/cash.mp3';

let userID = localStorage.getItem('userID');
let userEmail = localStorage.getItem('email');
let currentWallet = localStorage.getItem('wallet');

function Product({ product }) {

    const {backen_url} = useContext(UserContext);
    const [cash] = useState(new Audio(cashSound));
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
  
    useEffect(() => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    currency_code: 'USD',
                    value: product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
              await actions.order.capture().then(function(details) {
                let amount = details.purchase_units[0].amount.value;
                let name = details.payer.name.given_name;
                let newWallet = (Number(currentWallet) + Number(amount));
                let timeCreated = details.create_time;
                let idTrans = details.id;
                let status = details.status;
                let payerEmail = details.payer.email_address;
                let payerSurname = details.payer.name.surname;
                let payerId = details.payer.payer_id;

                let transDatas = JSON.stringify({
                  trans_time: timeCreated,
                  trans_id: idTrans,
                  trans_status: status,
                  paypal_payer_email: payerEmail,
                  paypal_payer_name: name,
                  paypal_payer_surname: payerSurname,
                  paypal_payer_id: payerId,
                  old_amount: currentWallet,
                  trans_amount: amount,
                  new_amount: newWallet,
                  user_id: userID,
                  user_email: userEmail
                })
                // fetch Post update wallet users table and add new transaction
                fetch(backen_url+'/transaction', {
                method: 'POST',
                body: transDatas,
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(res => {
                        localStorage.setItem('wallet', newWallet);
                        cash.play();
                        swal("Transaction Completed "+ name , "You Added $"+ amount + " to your Wallet", "success", {
                          button: "COOL",
                        }).then(() => {
                            window.location.href = "http://localhost:3000/";
                            });
                        console.log(details);
                        console.log(res);
                })
                .catch(error => {
                    console.log('Error:', error);
                    swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
                        button: "OK",
                      })
                });

            })
            setPaidFor(true);
          },
          onError: err => {
            setError(err);
            swal("Something Went Wrong!", JSON.stringify("error: => "+ err), "error", {
              button: "OK",
            })
            console.error(err);
          },
        })
        .render(paypalRef.current);
    }, [product.description, product.price, cash, backen_url]);
  
    if (paidFor) {
      return (
        <div>
          <h2>Congrats, you just added ${product.price} to your wallet</h2>
        </div>
      );
    }
  
    return (
      <div>
        {error && <div>Uh oh, an error occurred! {error.message}</div>}
        
        <div className="alert alert-warning" role="alert">
          <h1>{product.description}  ${product.price}</h1>
        </div>
    
        <div ref={paypalRef} />
      </div>
    );
  }

const Checkout = (props) => {

    const {valuesData} = useContext(UserContext);

    let valueID = props.match.params.amount;

    const product = {
        price: valuesData[valueID].value,
        name: valuesData[valueID].name,
        description: 'Add Value Selected: '
      };

    return (
        <section className={styles.section}>
            <div className={["container text-center p-5", styles.payment].join(' ')}>
                <Product product={product} />
            </div>
        </section>
    );
};

export default Checkout;