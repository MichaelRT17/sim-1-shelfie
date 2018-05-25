import React, { Component } from 'react';
import axios from 'axios';
import Product from '../product/Product';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);
    }
    deleteProduct(id) {
        axios.delete(`/api/deleteProduct/${id}`).then(res => {
            this.props.getProducts()
        })
    }

    render() {
        console.log(this.props)
        let mapped = this.props.products.map(product => {
            return (
                <Product
                    key={product.product_id}
                    product_image={product.product_image}
                    product_name={product.product_name}
                    product_price={product.product_price}
                    deleteProduct={this.deleteProduct}
                />
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                {mapped}
            </div>
        )
    }
}