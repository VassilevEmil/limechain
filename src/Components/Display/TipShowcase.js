import React, { useState } from "react";
import "./TipShowCase.css";

// comment

const TipShowCase = ({ tipPerPerson, totalTip, onReset }) => {
  return (
    <div className="tip-display">
      <h3>Tip Amount</h3>
      <p>Tip per Person: ${tipPerPerson.toFixed(2)}</p>
      <p>Total Tip: ${totalTip.toFixed(2)}</p>
      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default TipShowCase;
