import React, { useState } from "react";
import "./InsertBill.css";

// function component to insert bill details in a form and pass it as prop for further use

function InsertBill({ onBillChange }) {
  const [billAmount, setBillAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // handling the input value changes using props

  const handleBillChange = (e) => {
    const amount = e.target.value;
    setBillAmount(amount);
    if (amount < 0) {
      setErrorMessage("Bill amount cannot be negative.");
    } else {
      setErrorMessage("");
      onBillChange(amount);
    }
  };

  return (
    <div className="insert-bill-wrapper">
      <p className="insert-bill-label">Bill</p>
      <div className="insert-bill-input-group">
        <span className="insert-bill-addon">$</span>
        <input
          type="number"
          id="billAmount"
          value={billAmount}
          onChange={handleBillChange}
          className="insert-bill-input"
        />
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default InsertBill;
