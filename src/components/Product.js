import React, { Component } from 'react';

class Product extends Component {
  render() {

    var {match}=this.props;
    var name = match.params.name;

    return (
      <h1>
        Chi tiết: {name}
      </h1>
    );
  }
}

export default Product;
