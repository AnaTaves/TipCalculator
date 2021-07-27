import React, { useState } from "react";

import DisplayTotal from "./components/DisplayTotal/displayTotal-component";

import {
  GlobalStyle,
  Container,
  CalculatorContainer,
  InputValue
} from "./App-styles";

function App() {
  const [pct, setPct] = useState(0);
  const [bill, setBill] = useState(0);
  return (
    <>
      <GlobalStyle />
      <h1>Tip Calculator</h1>
      <Container>
        <CalculatorContainer>
          <p>How much was the bill?</p>
          <InputValue
            type="number"
            value={bill}
            onChange={(e) => setBill(parseFloat(e.target.value))}
          />
          <p>What is the percentage of the tip?</p>
          <InputValue
            type="number"
            value={pct}
            onChange={(e) => setPct(parseFloat(e.target.value))}
          />
        </CalculatorContainer>

        <DisplayTotal bill={bill} pct={pct} />
      </Container>
    </>
  );
}

export default App;
