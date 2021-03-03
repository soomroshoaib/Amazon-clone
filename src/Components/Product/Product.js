import { yellow } from '@material-ui/core/colors';
import React from 'react';
import { useStateValue } from '../../StateProvider';
import './product.css';

function Product({ id ,title, image, price, rating }) {
    // const [{ basket }, dispatch] = useStateValue();
    const [{ basket, user } , dispatch] = useStateValue();
    //  console.log('this is the basket >>>>',basket);

    const addToBasket = () => {
    // dispatch the item into the data later
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
    })
    }
    
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="s">
                    {Array(rating)
                    .fill()
                    .map((_, i)=> (
                        <p>☆</p>
                    ))
                    }
                                      
                </div>
            </div>

            <img src={image} alt="The Lean Startup" />
            <button onClick={addToBasket}>Add to Basket</button>
         </div>
    )
}

export default Product;
