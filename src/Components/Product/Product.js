import { yellow } from '@material-ui/core/colors';
import React from 'react';
import './product.css';

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i)=> (
                        <p>☆</p>
                    ))
                    }
                                      
                </div>
            </div>

            <img src={image} alt="The Lean Startup" />
            <button>Add to Basket</button>
         </div>
    )
}

export default Product;
