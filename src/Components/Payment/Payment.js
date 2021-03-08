import React,{ useState,useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from './../CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';
import "./payment.css";
import {loadStripe} from '@stripe/stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import axios from '../../Api/axios';
import { useHistory } from 'react-router-dom';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] =useState(true);
    const [clientSecret, setClientSecret] =useState(true);
    const history = useHistory();
    

    useEffect(()=> {
    // generate the special stripe secret which allows us to charge 
    // a cutomer
    const getClientSecret = async () => {
         const response = await axios({
             method: 'post',
             // Stripe expects the total in a currrencies subunits
             url: `/payments/create?total=${getBasketTotal(basket)*100}`
         })
         setClientSecret(response.data.clientSecret)
     }
     getClientSecret();
    }, [basket]);

    
    console.log('Client Secret is >>>>',clientSecret);

    const stripe = useStripe();
    const elements = useElements();
    console.log(stripe,elements);


    const handleSubmit = async(event)=> {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent })=>{
        // paymentIntent = payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
            type: 'EMPTY_BASKET'
        })

        history.replace('/orders')
        })

    }
    
    
    const handleChange = (event)=> {
           // Listen for changes in the CardElement
           // and display any errors as the cutomer types and the card details
           setDisabled(event.empty);
           setError(event.error ? event.error.message : "" );
    }

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
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                    </form>

                    <div className="payment__priceContainer">
                    <CurrencyFormat 
            renderText={(value)=> (
               <h3>Order Total: {value}</h3>              
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}  // part of the homework
            displayType={"text"} 
            thousandSeparator={true} 
            prefix={'$'} 
                   />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                        </button>
                    </div>
                    {/* {Errors} */}
                    {error && <div>{error}</div>}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;
