import React, { useState } from "react";
import InsertBill from "./Components/BillField/InsertBill";

function App() {
  const [billAmount, setBillAmount] = useState(0);

  const handleBillChange = (amount) => {
    setBillAmount(parseFloat(amount));
  };

  return (
    <div>
      <InsertBill onBillChange={handleBillChange} />
      {/* Other components and calculations */}
    </div>
  );
}

export default App;
