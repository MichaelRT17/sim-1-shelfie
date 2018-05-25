import React from 'react';

const Product = function (props) {
    return (
        <div>
            <h1>Product</h1>
            <img src={props.product_image} alt='' />
            <h3>{props.product_name}</h3>
            <h3>{props.product_price}</h3>
            <button onClick={() => props.deleteProduct(props.key)}>Delete</button>
        </div>
    )
}

export default Product;