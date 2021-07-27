import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  box-sizing: border-box;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background-image: linear-gradient(to right,#DEDAFF,#CCD9FC);
  text-align: center;
}
p{
  margin-top: 10px;
}
`;

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 20rem;
  height: 15rem;
  padding: 10px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(5px);
`;

export const CalculatorContainer = styled.div`
  margin: inherit;
  background-color: #ffffff;
  border-radius: 10%;
  height: 170px;
  width: 130px;
  color: #8a9abc;
  margin-bottom: 10px;
`;

export const InputValue = styled.input`
  -moz-appearance: textfield;
  width: 50px;
  margin-top: 5px;
`;
