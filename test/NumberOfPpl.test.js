import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NumberOfPpl from "./NumberOfPpl";

describe("NumberOfPpl", () => {
  it("updates the number of people correctly", () => {
    const handlePeopleChange = jest.fn();
    render(<NumberOfPpl onPeopleChange={handlePeopleChange} />);

    const numberOfPeopleInput = screen.getByLabelText("Number of people");
    fireEvent.change(numberOfPeopleInput, { target: { value: "3" } });

    expect(handlePeopleChange).toHaveBeenCalledWith("3");
  });
});
