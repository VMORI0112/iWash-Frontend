import React, { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from '../../../UserContext'; 
import styles from './Checkout.module.css';

function Product({ product }) {
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
                alert("Transaction Completed.\n" + name + ", You Added $" + amount + " to your Wallet");
                console.log(details.purchase_units[0].amount.value)
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
        <h1>
          {product.description}  ${product.price}
        </h1>
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
        description: 'add value selected: '
      };

    return (
        <section className={styles.section}>
            <div className={["container text-center", styles.payment].join(' ')}>
                <Product product={product} />
            </div>
        </section>
    );
};

export default Checkout;