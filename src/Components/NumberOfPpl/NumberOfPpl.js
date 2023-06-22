import React, { useState } from "react";

function NumberOfPpl({ onPeopleChange }) {
  const [number, setNumber] = useState("");

  const handleNumberChange = (e) => {
    const amount = e.target.value;
    setNumber(amount);
    onPeopleChange(amount);
  };

  return (
    <div>
      <p>Number of people</p>
      <input type="number" value={number} onChange={handleNumberChange} />
    </div>
  );
}

export default NumberOfPpl;
