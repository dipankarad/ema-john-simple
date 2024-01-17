import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props);
    const cart=props.cart;
    console.log(cart);
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;
    }
    let shipping=0;
    if(total>35){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    const tax=total/10;
    const formatNumber=num=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className='cart-div'>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Price: {shipping}</small></p>
            <p><small>Tax: {formatNumber(tax)}</small></p>
            <p className='total'>Total Price: {formatNumber(total+shipping+tax)}</p>
        </div>
    );
};

export default Cart;