import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Error from "../index";

test("Header renders correct snapshot", () => {
  const component = renderer.create(<Error />);
  let tree = component.toJSON();
  expect(tree).toMatchStyledComponentsSnapshot();
});
