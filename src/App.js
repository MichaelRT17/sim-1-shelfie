import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      selectedProduct: {},
      editToggle: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.editToggle = this.editToggle.bind(this);
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      this.setState({ products: res.data })
    })
  }

  selectProduct(product) {
    this.setState({ 
      selectedProduct: product,
    })
    this.editToggle()
  }

  editToggle() {
    this.setState({
      editToggle: !this.state.editToggle
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard
          products={this.state.products}
          getProducts={this.componentDidMount}
          selectProduct={this.selectProduct}
        />
        <Form
          getProducts={this.componentDidMount}
          selected={this.state.selectedProduct}
          toggle={this.editToggle}
        />
        <Header />
      </div>
    );
  }
}

export default App;
