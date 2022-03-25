import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Product = ({product}) => {
    const {name, id, img, model, price, scale} = product;
    return (
            <div className='product p-2 rounded border'>
                <div className="product-img">
                    <img className='img-fluid rounded' src={img} alt="" />
                </div>
                <div className="product-info">
                    <h5 className='pt-2'>{name}</h5>
                    <h6>Model: {model}</h6>
                    <h6>Scale: {scale}</h6>
                    <h6>Product ID: {id}</h6>
                    <h5>Price: {price} BDT</h5>
                    <button className='btn text-white py-1 px-2 cart-btn'>Add To Cart
                    <span className='ps-2'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></span>
                    </button>
                </div>
            </div>
    );
};

export default Product;