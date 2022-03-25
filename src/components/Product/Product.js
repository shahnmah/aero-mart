import React from 'react';

const Product = ({product}) => {
    const {name, id, img, model, price, scale} = product;
    return (
            <div className>
                <div className="product-img">

                </div>
                <div className="product info">
                    <h4>{name}</h4>
                    <h5>Model: {model}</h5>
                    <h6>Scale: {scale}</h6>
                    <h4>Price: {scale}</h4>
                </div>
            </div>
    );
};

export default Product;