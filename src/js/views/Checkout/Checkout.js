import React, { useState, useRef, useEffect } from 'react';
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
            const order = await actions.order.capture();
            setPaidFor(true);
            console.log(order);
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
          <h1>Congrats, you just bought {product.name}!</h1>
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

const Checkout = () => {

    const product = {
        price: 0.07,
        name: 'add value',
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