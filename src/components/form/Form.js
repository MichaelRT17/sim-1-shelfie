import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageInput: '',
            nameInput: '',
            priceInput: 0,
            selectedProductId: 0,
            editing: null,
            imageEdit: '',
            nameEdit: '',
            priceEdit: 0
        }
    }

    componentDidUpdate(oldProps) {
        console.log(this.props.selected)
        if (oldProps !== this.props) {
            this.setState({
                imageEdit: this.props.selected.product_image,
                nameEdit: this.props.selected.product_name,
                priceEdit: this.props.selected.product_price,
                selectedProductId: this.props.selected.product_id,
                editing: this.props.toggle
            })
        }
    }

    clearInputs() {
        this.setState({
            imageInput: '',
            nameInput: '',
            priceInput: 0,
            editing: false,
            imageEdit: '',
            nameEdit: '',
            priceEdit: 0
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

    editProduct(id) {
        console.log(this.state)
        axios.put('/api/editProduct/' + id, {
            product_image: this.state.imageEdit,
            product_name: this.state.nameEdit,
            product_price: this.state.priceEdit
        })
            .then(res => {
                this.props.getProducts()
                
            })
            this.clearInputs()
            this.props.toggle()
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Form</h1>
                {this.state.editing
                    ?
                    <div>
                        Image URL:
                        <input className='' value={this.state.imageEdit} onChange={e => this.setState({ imageEdit: e.target.value })} />
                        Product Name:
                        <input className='' value={this.state.nameEdit} onChange={e => this.setState({ nameEdit: e.target.value })} />
                        Price:
                        <input className='' value={this.state.priceEdit} onChange={e => this.setState({ priceEdit: e.target.value })} />
                        <button className='' onClick={() => this.setState({ imageEdit: '', nameEdit: '', priceEdit: 0 , editing: false})}>Cancel</button>
                        <button onClick={() => this.editProduct(this.state.selectedProductId)}>Save Changes</button>
                    </div>
                    :
                    <div>
                        Image URL:
                        <input value={this.state.imageInput} onChange={e => this.setState({ imageInput: e.target.value })} />
                        Product Name:
                        <input className='' value={this.state.nameInput} onChange={e => this.setState({ nameInput: e.target.value })} />
                        Price:
                        <input className='' value={this.state.priceInput} onChange={e => this.setState({ priceInput: e.target.value })} />
                        <button className='' onClick={() => this.setState({ imageInput: '', nameInput: '', priceInput: 0 })}>Cancel</button>
                        <button onClick={() => this.createProduct()}>Add to Inventory</button>
                    </div>
                }
            </div>
        )
    }
}