import React from 'react';
import './subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { SportsBasketball } from '@material-ui/icons';


function Subtotal() {
    
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value)=> (
                <>
                <p>
                    {/* Part of the homework */}
                    Subtotal (0 items): 
                    {/* <strong>{`${value}`}</strong> */}
                    <strong>0</strong>

                    <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                </p>
                </>
            )}
            decimalScale={2}
            value={0}  // part of the homework
            displayType={"text"} 
            thousandSeparator={true} 
            prefix={'$'} 
                   />

                   <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
