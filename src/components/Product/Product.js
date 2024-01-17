import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    //  console.log(props);
    if (!props.product) {
        return <div className='ldi'>Loading...</div>; // or any other fallback behavior
    }
    return (
        <div className='product'> 
          <div>
            <img src={props.product.img} alt="" />
          </div>
         <div>
            <h4 className='product-name'>{props.product.name}</h4>
            <br />
            <p><small>by: {props.product.seller}</small></p>
            <p>{props.product.price} $</p>
            <p><small>Only {props.product.stock} in stock</small></p>
            <button className='main-btn' onClick={()=>props.handleProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button>
         </div>
        </div>
    );
};

export default Product;