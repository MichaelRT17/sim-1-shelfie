import React from 'react';

const Product = function (props) {
    return (
        <div>
            <h1>Product</h1>
            <img src={props.product_image} alt='' />
            <h3>{props.product_name}</h3>
            <h3>{props.product_price}</h3>
            <button onClick={() => props.deleteProduct(props.product_id)}>Delete</button>
            <button onClick={() => props.selectProduct({
                product_id: props.product_id,
                product_image: props.product_image,
                product_name: props.product_name,
                product_price: props.product_price
            })}>Edit</button>
        </div>
    )
}

export default Product;