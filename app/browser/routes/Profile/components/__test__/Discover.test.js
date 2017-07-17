import React from "react";
import renderer from "react-test-renderer";
import Discover from "../About";

test("Discover renders correct snapshot", () => {
  const component = renderer.create(<Discover />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
