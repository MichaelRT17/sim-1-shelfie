import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageInput: '',
            nameInput: '',
            priceInput: 0
        }
    }

    clearInputs() {
        this.setState({
            imageInput: '',
            nameInput: '',
            priceInput: 0 
        })
    }

    createProduct() {
        axios.post('/api/product', {
            product_image: this.state.imageInput,
            product_name: this.state.nameInput,
            product_price: this.state.priceInput
        })
        .then(res => {
            this.props.getProducts()
            this.clearInputs()
        })
    }

    render() {
        return (
            <div>
                <h1>Form</h1>
                Image URL:
                <input className='' value={this.state.imageInput} onChange={e => this.setState({ imageInput: e.target.value })} />
                Product Name:
                <input className='' value={this.state.nameInput} onChange={e => this.setState({ nameInput: e.target.value })} />
                Price:
                <input className='' value={this.state.priceInput} onChange={e => this.setState({ priceInput: e.target.value })} />
                <button className='' onClick={() => this.setState({ imageInput: '', nameInput: '', priceInput: 0 })}>Cancel</button>
                <button className=''onClick={() => this.createProduct()}>Add to Inventory</button>
            </div>
        )
    }
}