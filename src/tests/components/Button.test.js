import React from "react";
import "@testing-library/jest-dom";
import { Button } from "../../components/common/Button";
import { mount } from "enzyme";

describe("Unit testing for Button Component", () => {
  const mockOnclick = jest.fn();
  const label = "Test Btn";
  const wrapper = mount(<Button onClick={mockOnclick} label={label} />);

  test("Should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Test Clicks events", () => {
    console.log(wrapper.find("button").simulate("click"));
    expect(mockOnclick.mock.calls.length).toEqual(1);
  });
});
