import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div
      className='row my-2 text-center text-capitalize'
      style={{
        borderBottom: "0.2px solid #d4d4d4 ",
        borderTop: "0.2px solid #d4d4d4 ",
        padding: "15px 0px",
        lineHeight: "4"
      }}
    >
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={img}
          alt={title}
          style={{ width: "5rem", height: "5rem" }}
          className='img-fluid'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Product: </span>
        {title}
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Price: £</span>
        {price}
      </div>

      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span
              className='btn-orange'
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </span>
            <span className='btn-orange'>{count}</span>
            <span
              className='btn-orange'
              onClick={() => {
                increment(id);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>

      {/* Remove Item */}
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon'>
          <i
            style={{ color: "orange" }}
            className='fa fa-trash'
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>

      {/* Total */}
      <div className='col-10 mx-auto col-lg-2'>
        <strong>Item total: £{total}</strong>
      </div>
    </div>
  );
}
