import React, { useState } from "react";

const TipShowcase = ({ tipPerPerson, totalTip, onReset }) => {
  return (
    <div>
      <h3>Tip Amount</h3>
      <p>Tip per Person: ${tipPerPerson.toFixed(2)}</p>
      <p>Total Tip: ${totalTip.toFixed(2)}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default TipShowcase;
