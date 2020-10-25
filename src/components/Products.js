import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
  render() {

    var products = [
      {
        id: '1',
        slug : 'iphone',
        name: 'iphone 11 pro max',
        price: '10000'
      },
      {
        id: '2',
        slug : 'samsung',
        name: 'samsung galaxy s10',
        price: '20000'
      },
      {
        id: '3',
        slug : 'oppo',
        name: 'oppo f1s',
        price: '30000'
      }
    ];

    var { match }=this.props;
    var url = match.url;

    var result = products.map((product, index) => { 
      return (
        <NavLink to ={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });

    var {location}= this.props;
    
    return (
      <div className='containner'>
        <h1>Danh sách sản phẩm</h1>
        <div className="row">         
          <ul className="list-group">
            {result}
          </ul>         
        </div>
        
        <div className="row">
          <Route path="/products/:name" component={Product}/>
        </div>
        
      </div>

    );
  }
}

export default Products;
