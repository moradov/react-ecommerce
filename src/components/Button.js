import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: 1px solid orange;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  font-size: 1em;
  font-weight: 500;
  padding: 0.45em 0.85em;
  transition: all 0.25s linear;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainDark);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
