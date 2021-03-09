import React from 'react';
import { useStateValue } from '../../StateProvider';
import './checkoutProduct.css';
import FlipMove from 'react-flip-move';


function CheckProduct({ id,image,title,price,rating, hideButton }) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = ()=>{
      // remove the item from the basket
      dispatch({
          type: 'REMOVE_FROM_BASKET',
          id: id,
      })
    }

    return (
        <div className="checkoutProduct">
            <FlipMove>
            <img className="checkoutProduct__image" src={image} alt="image-product"/>
              <div className="checkoutProduct__info">
                  <p className="checkoutProduct__title">{title}</p>
                  <p className="checkoutProduct__price">
                         <small>$</small>
                         <strong>{price}</strong>
                  </p>
                     <div className="checkoutProduct__rating">
                         {Array(rating)
                         .fill()
                         .map((_,i)=> (
                             <p>☆</p>
                         ))
                         }
                     </div>
              {!hideButton && (
                  
                  <button onClick={removeFromBasket}>Remove from Basket</button>
              )}
              </div>
              </FlipMove>
        </div>
    )
}

export default CheckProduct;
