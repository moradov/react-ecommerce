import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        className='footer'
        style={{
          backgroundColor: "orange",
          padding: "16px 0px ",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%"
        }}
      >
        <div
          style={{
            width: "71%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <span>&copy; 2019 </span>
          <span>
            {" "}
            created by :{" "}
            <a href='#' style={{ color: "sandybrown" }}>
              morad
            </a>{" "}
          </span>
        </div>
      </div>
    );
  }
}
export default Footer;
