import React, { Component } from "react";
import { ProductConsumer } from "../context";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            price,
            title,
            info,
            inCart
          } = value.detailProduct;

          return (
            <div className='container'>
              <div className='row'>
                <div className='col-10 mx-auto text-center my-3'>
                  <h1
                    style={{ color: "rgb(130, 125, 118)", margin: "25px 0px" }}
                  >
                    {title}
                  </h1>
                </div>
              </div>

              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img src={img} alt={title} className='img-fluid' />
                </div>

                <div className='col-10 mx-auto col-md-6 my-3'>
                  <h3 style={{ color: "rgb(130, 125, 118)" }}>
                    Model: {title}
                  </h3>
                  <h6 className='text-title  text-muted mt-3 mb-2'>
                    made by: <span className=''>{company}</span>
                  </h6>
                  <h6 style={{ color: "rgb(130, 125, 118)" }}>
                    Price:
                    <strong>
                      {" "}
                      £<span>{price}</span>
                    </strong>
                  </h6>
                  <p className='mt-3 mb-0'>Info about the product</p>
                  <p className='text-muted'>{info}</p>

                  <div className=''>
                    <button
                      cart
                      className='ml-1'
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                      style={{
                        border: "1px solid orange",
                        padding: "10px 12px",
                        color: "orange",
                        cursor: "pointer",
                        backgroundColor: "#f7f7f7"
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
