import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from './../CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';
import "./payment.css";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
       <div className="payment__container">
          {/* Payment section - delivery address */}
            <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>
        <div className="payment__section">
              <div className="payment__title">
                  <h3>Delivery Address</h3>
              </div>
              <div className="payment__address">
                  <p>{user?.email}</p>
                  <p>123 React Lane</p>
                  <p>Pakistan, Karachi</p>
              </div>
            </div>
             {/* Payment section - Reviews Items */}
        <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__item">
                    {basket.map((item)=> (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            {/* Payment section - Payment method */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
                <div className="payment__details">
                    {/* Stripe Api using */}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;
