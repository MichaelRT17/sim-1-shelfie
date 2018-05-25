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
      products: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      this.setState({products: res.data})
    })
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="App">
        <Dashboard products = {this.state.products} getProducts={this.componentDidMount}/>
        <Form getProducts={this.componentDidMount}/> 
        <Header />
      </div>
    );
  }
}

export default App;
