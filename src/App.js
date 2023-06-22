import React, { useState } from "react";
import InsertBill from "./Components/BillField/InsertBill";
import CalculatePercentage from "./Components/CalculatePercentage/CalculatePercentage";
import NumberOfPpl from "./Components/NumberOfPpl/NumberOfPpl";
import TipShowcase from "./Components/Display/TipShowcase";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [numberOfPpl, setNumberOfPpl] = useState(0);

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
    <div>
      <InsertBill onBillChange={handleBillChange} />
      <CalculatePercentage
        billAmount={billAmount}
        onTipChange={handleTipChange}
      />
      <TipShowcase
        tipPerPerson={tipPerPerson}
        totalTip={totalTip}
        onReset={handleReset}
      />
      {/* <p>Total Tip: ${tipAmount.toFixed(2)}</p> */}
      <NumberOfPpl
        numberOfPpl={numberOfPpl}
        onPeopleChange={handlePeopleChange}
      />

      {/* Other components and calculations */}
    </div>
  );
}

export default App;
