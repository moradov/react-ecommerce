import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {/* get the value params */}
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className='container'>
                  <div className='row' onClick={() => closeModal()}>
                    <div
                      id='modal'
                      className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4'
                    >
                      <h5 style={{ color: "orange" }}>
                        Item added successfuly{" "}
                      </h5>
                      {/* <img src={img} className='img-fluid' alt='product' /> */}
                      <h5 style={{ color: "rgb(130, 125, 118)" }}>{title}</h5>
                      <h6 className='text-muted'>price: ${price}</h6>

                      <Link to='/'>
                        <button
                          style={{ backgroundColor: "orange", color: "#fff" }}
                          className='btn-orange'
                          onClick={() => closeModal()}
                        >
                          Continue choping
                        </button>
                      </Link>
                      <Link to='/cart'>
                        <button
                          style={{ backgroundColor: "orange", color: "#fff" }}
                          cart
                          className='btn-orange'
                          onClick={() => closeModal()}
                        >
                          View Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
