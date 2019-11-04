import React, { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from '../../../UserContext'; 
import styles from './Checkout.module.css';

let userID = localStorage.getItem('userID');
let currentWallet = localStorage.getItem('wallet');

function Product({ product }) {

    // let wallet = localStorage.getItem('wallet');

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
                let transDatas = JSON.stringify({
                  id: userID,
                  amount: newWallet
                })
                // fetch Post update wallet users table and add new transaction
                fetch('http://0.0.0.0:3000/transaction', {
                method: 'PUT',
                body: transDatas,
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(res => {
                        localStorage.setItem('wallet', newWallet);
                        alert("Transaction Completed.\n" + name + ", You Added $" + amount + " to your Wallet");
                        console.log(res);
                        window.location.href = "http://localhost:3001/";
                })
                .catch(error => {
                    console.log('Error:', error);
                    alert("error", JSON.stringify(error));
                });

            })
            setPaidFor(true);
          },
          onError: err => {
            setError(err);
            console.error(err);
          },
        })
        .render(paypalRef.current);
    }, [product.description, product.price]);
  
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
              {/* {userEmail} */}
                <Product product={product} />
            </div>
        </section>
    );
};

export default Checkout;