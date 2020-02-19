import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {

  const app = shallow(<App />);

  it("Renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
  
  it("Initializes the `state` with an empty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("When `add-gift` button is clicked, ", () => {

    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: []});
    });

    it("a new item is added to `state`", () => {
      expect(app.state().gifts).toEqual([{id: 1}]);
    });
    
    it("a new gift is added to rendered list", () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
  });
});
