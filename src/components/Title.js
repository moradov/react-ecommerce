import React from "react";

export default function Title({ name, title }) {
  return (
    <div className='col-10 mx-auto my-2 text-center text-title'>
      <h2 style={{ padding: "50px 5px" }}> {name + " " + title} </h2>
    </div>
  );
}
