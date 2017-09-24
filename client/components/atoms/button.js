import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 1s;
  
  &:hover {
    background-color: #d8e152;
    transition: background-color 1s;
  }
`;

export default Button;
