import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Banner from "./Banner";

it("Banner renders corrently", () => {
  const { queryByTestId } = render(<Banner />);

  expect(queryByTestId("Banner")).toBeTruthy();
});

describe("Banner", () => {
  test("Banner snapshot renders ", () => {
    const component = renderer.create(<Banner />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
