import styled from "styled-components";

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
