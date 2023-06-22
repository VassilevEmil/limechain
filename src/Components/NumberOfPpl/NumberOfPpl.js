import React, { useState } from "react";
import "./NumberOfPpl.css";

function NumberOfPpl({ onPeopleChange }) {
  const [number, setNumber] = useState("");

  const handleNumberChange = (e) => {
    const amount = e.target.value;
    setNumber(amount);
    onPeopleChange(amount);
  };

  return (
    <div className="number-of-ppl-wrapper">
      <p className="number-of-ppl-label">Number of people</p>
      <input
        type="number"
        value={number}
        onChange={handleNumberChange}
        className="number-of-ppl-input"
      />
    </div>
  );
}

export default NumberOfPpl;
