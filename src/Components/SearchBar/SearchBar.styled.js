import styled from "styled-components";

export const Form = styled.form`
  font-size: inherit;
  color: inherit;
  outline: none;
  background-color: transparent;
`;
export const Header = styled.h1`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const Input = styled.input`
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  padding: 5px 10px;
  border: 1px white;
  border-radius: 15px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px white;
  margin-right: 5px;
  border-radius: 25px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  font-weight: 100;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    opacity: 1;
  }
`;
