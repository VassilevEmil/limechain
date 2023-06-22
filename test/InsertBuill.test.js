import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InsertBill from "./InsertBill";

describe("InsertBill", () => {
  it("does not allow negative bill amount", () => {
    const handleBillChange = jest.fn();
    render(<InsertBill onBillChange={handleBillChange} />);

    const billAmountInput = screen.getByLabelText("Bill Amount:");
    fireEvent.change(billAmountInput, { target: { value: "-50" } });

    const errorMessage = screen.getByText("Bill amount cannot be negative.");
    expect(errorMessage).toBeInTheDocument();
    expect(handleBillChange).not.toHaveBeenCalled();
  });

  it("allows positive bill amount", () => {
    const handleBillChange = jest.fn();
    render(<InsertBill onBillChange={handleBillChange} />);

    const billAmountInput = screen.getByLabelText("Bill Amount:");
    fireEvent.change(billAmountInput, { target: { value: "50" } });

    const errorMessage = screen.queryByText("Bill amount cannot be negative.");
    expect(errorMessage).not.toBeInTheDocument();
    expect(handleBillChange).toHaveBeenCalledWith("50");
  });
});
