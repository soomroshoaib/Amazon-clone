import React from 'react';
import './checkout.css';

import Subtotal from './../Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

function Checkout() {
    const [{ basket }, dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PEX/PeX-Top-PC-1500X375.jpg" alt="add"/>
            
            <div>
                <h2 className="checkout__title">
                Shopping Basket
                </h2>
                   
                   {basket.map((item)=>(

                   <CheckoutProduct 
                   id={item.id}
                   image={item.image}
                   title={item.title}
                   price={item.price}
                   rating={item.rating}
                   />
                   ))}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
            </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
           
            </div>
        </div>
    )
}

export default Checkout;
