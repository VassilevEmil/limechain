import React, { useState } from "react";
import CalculatePercentage from "./CalculatePercentage.css";

const TipPercentage = ({ billAmount, onTipChange }) => {
  const [tipPercent, setTipPercent] = useState(null);

  // the custom tip percentage has to be handled saparately

  const [customTip, setCustomTip] = useState("");

  // array with the possible tip percentages

  const percentageButtons = [
    { label: "5%", value: 5 },
    { label: "10%", value: 10 },
    { label: "15%", value: 15 },
    { label: "20%", value: 20 },
    { label: "25%", value: 25 },
  ];

  const handleTips = (percentage) => {
    setTipPercent(percentage);
    const tipAmount = (billAmount * percentage) / 100;
    onTipChange(tipAmount);
  };

  const handleCustomChange = (e) => {
    setCustomTip(e.target.value);
    setTipPercent(null);
  };

  // handler for custom tip percentage

  const handleCustomTips = () => {
    // parseFLoat to parse a string to a num
    const custom = parseFloat(customTip);
    if (!isNaN(custom)) {
      setTipPercent(custom);
      const tipAmount = (billAmount * custom) / 100;
      onTipChange(tipAmount);
    }
  };

  return (
    <div>
      <label>Select Tip Percentage:</label>
      <div>
        {percentageButtons.map((percentage) => (
          <button
            key={percentage.label}
            onClick={() => handleTips(percentage.value)}
            className={`tip-button ${
              tipPercent === percentage.value ? "active" : ""
            }`}
          >
            {percentage.label}
          </button>
        ))}
        <div className="custom-tip">
          <input
            type="number"
            placeholder="Custom %"
            value={customTip}
            onChange={handleCustomChange}
          />
          <button onClick={handleCustomTips}>Calculate</button>
        </div>
      </div>
    </div>
  );
};

export default TipPercentage;
