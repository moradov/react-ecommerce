import React, { Component, Fragment } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Footer from "./Footer";

export default class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className='container'>
          <div className='row' style={{ color: "rgb(130, 125, 118)" }}>
            <Title name='avalaible' title='products' />
          </div>
          <div className='row' style={{ marginBottom: "50px" }}>
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
