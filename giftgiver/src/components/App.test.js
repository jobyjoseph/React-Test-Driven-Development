import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

it("Renders correctly", () => {
  expect(app).toMatchSnapshot();
});

it("Initializes the `state` with an empty list of gifts", () => {
  expect(app.state().gifts).toEqual([]);
});

it("Adds a new item to `state` when `Add Gift` button is clicked", () => {
  app.find(".btn-add").simulate("click");
  expect(app.state().gifts).toEqual([{id: 1}]);
});

it("Adds a new gift to rendered list when `Add Gift` button is clicked", () => {
  app.find('.btn-add').simulate('click');
  expect(app.find('.gift-list').children().length).toEqual(2);
});