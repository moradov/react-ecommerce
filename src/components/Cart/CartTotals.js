import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <div style={{ textAlign: "center", margin: "40px 0px" }}>
      <h5 style={{ marginBottom: "20px" }}>
        Total:
        <strong> £{cartSubTotal}</strong>
      </h5>

      <Link to='/'>
        <button
          className='btn-orange'
          type='button'
          onClick={() => clearCart()}
        >
          clear cart
        </button>
      </Link>
    </div>
  );
}
