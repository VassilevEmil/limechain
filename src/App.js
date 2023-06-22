import React, { useState } from "react";
import InsertBill from "./Components/BillField/InsertBill";
import CalculatePercentage from "./Components/CalculatePercentage/CalculatePercentage";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const handleBillChange = (amount) => {
    setBillAmount(parseFloat(amount));
  };

  const handleTipChange = (amount) => {
    setTipAmount(amount);
  };

  return (
    <div>
      <InsertBill onBillChange={handleBillChange} />
      <CalculatePercentage
        billAmount={billAmount}
        onTipChange={handleTipChange}
      />

      <p>Total Tip: ${tipAmount.toFixed(2)}</p>
      {/* Other components and calculations */}
    </div>
  );
}

export default App;
