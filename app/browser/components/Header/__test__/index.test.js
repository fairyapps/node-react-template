import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Header from "../index";

test("Header renders correct snapshot", () => {
  const component = renderer.create(<Header>sometext</Header>);
  let tree = component.toJSON();
  expect(tree).toMatchStyledComponentsSnapshot();
});
