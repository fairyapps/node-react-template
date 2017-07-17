import React from "react";
import renderer from "react-test-renderer";
import About from "../About";

test("Aboutw renders correct snapshot", () => {
  const component = renderer.create(<About />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
