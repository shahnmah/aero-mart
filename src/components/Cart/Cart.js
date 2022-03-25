import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    // console.log(cart)
    // console.log(cart[0].name)
    let productName = [];
    for(const product of cart){
        productName = product.name
        
    }
    return (
        <div className='ms-3 px-4 cart text-white'>
            <p>{cart.length}</p>
            <h4>{productName}</h4>
            <button className='btn btn-info text-white fw-bold my-2'>Choose One</button>
            <button className='btn btn-danger fw-bold'>Choose Again</button>
            <div id='a'></div>
        </div>
    );
};

export default Cart;