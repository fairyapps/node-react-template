import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Profile from "../index";

test("Profile renders correct snapshot", () => {
  const component = renderer.create(
    <Profile match={{ params: { id: "1" } }} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
