import React, { useState } from "react";

// function component to insert bill details in a form and pass it as prop for further use

function InsertBill({ onBillChange }) {
  const [billAmount, setBillAmount] = useState("");

  // handling the input value changes using props

  const handleBillChange = (e) => {
    const amount = e.target.value;
    setBillAmount(amount);
    onBillChange(amount);
  };

  return (
    <div>
      <p>Bill</p>
      <label>Bill Amount:</label>
      <div className="input-group">
        <span className="input-group-addon">$</span>
        <input
          type="number"
          id="billAmount"
          value={billAmount}
          onChange={handleBillChange}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default InsertBill;
