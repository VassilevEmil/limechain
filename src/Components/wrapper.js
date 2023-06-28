import React, { useState } from "react";
import InsertBill from ".//BillField/InsertBill";
import TipPercentage from "./CalculatePercentage/CalculatePercentage";
import NumberOfPpl from "./NumberOfPpl/NumberOfPpl";
import TipShowCase from "./Display/TipShowCase";

// renaming the file
// will add some unusable code so i can commit to github and save the changes

const Wrapper = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [numberOfPpl, setNumberOfPpl] = useState(0);

  // dummy code which is not going to be used

  const [test, setTest] = useState(null);

  const handleBillChange = (amount) => {
    setBillAmount(parseFloat(amount));
  };

  const handleTipChange = (amount) => {
    setTipAmount(amount);
  };

  const handlePeopleChange = (amount) => {
    setNumberOfPpl(amount);
  };

  const tipPerPerson = numberOfPpl > 0 ? tipAmount / numberOfPpl : 0;
  const totalTip = tipAmount;

  const handleReset = () => {
    setBillAmount(0);
    setTipAmount(0);
    setNumberOfPpl(0);
  };

  return (
    <div className="tip-calculator-wrapper">
      <h2>Tip Calculator</h2>
      <div className="tip-calculator-container">
        <div className="input-section">
          <InsertBill onBillChange={handleBillChange} />
          <TipPercentage
            billAmount={billAmount}
            onTipChange={handleTipChange}
          />
          <NumberOfPpl
            numberOfPpl={numberOfPpl}
            onPeopleChange={handlePeopleChange}
          />
        </div>
        <div className="display-section">
          <TipShowCase
            tipPerPerson={tipPerPerson}
            totalTip={totalTip}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
