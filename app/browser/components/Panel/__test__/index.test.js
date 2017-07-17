import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Panel from "../index";

test("Panel renders correct snapshot", () => {
  const component = renderer.create(<Panel>sometext</Panel>);
  let tree = component.toJSON();
  expect(tree).toMatchStyledComponentsSnapshot();
});
