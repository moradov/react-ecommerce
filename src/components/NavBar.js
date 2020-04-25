import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper
        style={{ backgroundColor: "orange" }}
        className='navbar navbar-expand-sm navbar-dark px-sm-5'
      >
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              Mobi Store
            </Link>
          </li>
        </ul>

        <Link to='/cart' className='ml-auto'>
          {/* <ButtonContainer>
            <span className='mr-2'>
              <i
                style={{ color: "orange", fontSize: "30px" }}
                className='fa fa-cart-plus'
              />
            </span>
          </ButtonContainer> */}

          <span className='mr-2'>
            <i
              style={{ color: "#FFF", fontSize: "35px" }}
              className='fa fa-cart-plus'
            />
          </span>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    font-family: cursive;
    font-size: 21px;
    text-decoration: none;
  }
`;
