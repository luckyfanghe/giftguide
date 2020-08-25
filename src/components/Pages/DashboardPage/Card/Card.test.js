import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Card from "./Card";

it("Card renders corrently", () => {
  const { queryByTestId } = render(<Card />);

  expect(queryByTestId("Card")).toBeTruthy();
});

describe("Card", () => {
  test("Card snapshot renders ", () => {
    const component = renderer.create(<Card />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
