import React from "react";

import {
  DisplayTotalContainer,
  DisplayBillContainer,
  DisplayBill
} from "./displayTotal-styles";

const DisplayTotal = ({ bill, pct }) => (
  <>
    {bill > 0 && (
      <DisplayTotalContainer>
        <>
          <DisplayBillContainer>
            Sub Total:<span>USD {bill}</span>
          </DisplayBillContainer>
          <DisplayBillContainer>
            Tip {pct} %:<span> USD {(bill * pct) / 100}</span>
          </DisplayBillContainer>
          <DisplayBillContainer>
            Total: <DisplayBill>USD {bill + (bill * pct) / 100}</DisplayBill>
          </DisplayBillContainer>
        </>
      </DisplayTotalContainer>
    )}
  </>
);

export default DisplayTotal;
