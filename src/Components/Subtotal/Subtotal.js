import React from 'react';
import './subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { SportsBasketball } from '@material-ui/icons';
import { useStateValue } from './../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory()
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value)=> (
                <>
                <p>
                    {/* Part of the homework */}
                    Subtotal ({basket.length} items): 
                    {/* <strong>{`${value}`}</strong> */}
                    <strong>{value}</strong>

                    <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                </p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}  // part of the homework
            displayType={"text"} 
            thousandSeparator={true} 
            prefix={'$'} 
                   />

                   <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
