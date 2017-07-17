import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Container, Row, Column } from "../index";

test("Column renders correct snapshot", () => {
  const component = renderer.create(<Column md={1 / 2}>sometext</Column>);
  let tree = component.toJSON();
  expect(tree).toMatchStyledComponentsSnapshot();
});
