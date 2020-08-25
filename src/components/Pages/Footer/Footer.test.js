import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Footer from "./Footer";

it("Footer renders corrently", () => {
  const { queryByTestId } = render(<Footer />);

  expect(queryByTestId("Footer")).toBeTruthy();
});

describe("Footer", () => {
  test("Footer snapshot renders ", () => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
