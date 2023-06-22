import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CalculatePercentage from "../src/Components/CalculatePercentage/CalculatePercentage";

describe("TipPercentage", () => {
  it("calculates tip amount correctly for selected percentage", () => {
    const handleTipChange = jest.fn();
    render(
      <CalculatePercentage billAmount={100} onTipChange={handleTipChange} />
    );

    const tipButton = screen.getByText("10%");
    fireEvent.click(tipButton);

    expect(handleTipChange).toHaveBeenCalledWith(10);
  });

  it("calculates tip amount correctly for custom percentage", () => {
    const handleTipChange = jest.fn();
    render(
      <CalculatePercentage billAmount={100} onTipChange={handleTipChange} />
    );

    const customTipInput = screen.getByPlaceholderText("Custom %");
    fireEvent.change(customTipInput, { target: { value: "15" } });

    const calculateButton = screen.getByText("Calculate");
    fireEvent.click(calculateButton);

    expect(handleTipChange).toHaveBeenCalledWith(15);
  });
});
