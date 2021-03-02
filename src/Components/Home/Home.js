import React from 'react';
import './home.css';

import Product from './../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="amzon--images" />
              
              <div className="home__row">
                  <Product 
                  title="The lean Startup"
                    price={29.9}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                    rating={3}
                  />
                  <Product 
                  title="National Geographic Kids Why?: Over 1,111 Answers to Everything Hardcover – Illustrated, October 13, 2015"
                  price={30}
                  image="https://images-na.ssl-images-amazon.com/images/I/51T2K01me+L._SX381_BO1,204,203,200_.jpg"
                  rating={4}
                  />
                  
          
                  {/* Product */}
              </div>
              
              <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                    <Product 
                    title="The Four Winds: A Novel Hardcover – February 2, 2021"
                    price={23.1}
                    image="https://images-na.ssl-images-amazon.com/images/I/51r9ZiBU6rL._SX327_BO1,204,203,200_.jpg"
                    rating={5}
                    />
                  <Product 
                  title="Brown Bear, Brown Bear, What Do You See? Board book – September 15, 1996"
                  image="https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SY344_BO1,204,203,200_.jpg"
                  price={19.2}
                  rating={3}
                  />
                  <Product 
                  title="Dr. Seuss's Beginner Book Collection (Cat in the Hat, One Fish Two Fish, Green Eggs and Ham, Hop on Pop, Fox in Socks) Hardcover – Box set, September 22, 2009"
                  image="https://images-na.ssl-images-amazon.com/images/I/51PWDGLykIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                  price={18.1}
                  rating={5}
                  />
                  
              </div>
              
              <div className="home__row">
                    {/* Product */}
                    <Product />
                 
              </div>
                
            </div>
        </div>
    )
}

export default Home;
