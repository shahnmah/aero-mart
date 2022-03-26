import React from 'react';
import './Cart.css'

const Cart = ({cart, clear}) => {
    // cart.map(cartName => console.log(cartName.name))
    // console.log(cart)
    // console.log(cart[0].name)
    let productName = [];
    for(const product of cart){
        productName = product.name
    }
    
    return (
        <div className='ms-3 px-4 cart text-white'>
            <h4 className='py-3'>Selected Items</h4>
            <h5>{productName}</h5>
            <button className='btn btn-info text-white fw-bold my-2'>Choose One</button>
            <button onClick={()=>clear(cart)} className='btn btn-danger fw-bold'>Choose Again</button>
        </div>
    );
};

export default Cart;