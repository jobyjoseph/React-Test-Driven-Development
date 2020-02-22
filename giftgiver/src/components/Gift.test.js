import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {

  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: {id}, removeGift: mockRemove };
  const gift = shallow(<Gift {...props}/>);

  it("Component renders correctly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes a person and present in `state`", () => {
    expect(gift.state()).toEqual({person:"", present:""})
  })

  describe("When typing into the person input", () => {
    const person = "Uncle";

    beforeEach(() => {
      gift.find('.input-person').simulate("change", {target: {value: person}});
    });

    it("updates the person in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe("When typing into the present input", () => {
    const present = "Wallet";

    beforeEach(() => {
      gift.find(".input-present").simulate("change", {target: {value: present}});
    });

    it("updates the present in `state`", () => {
      expect(gift.state().present).toEqual(present);
    });

  });

  describe("When `Remove Gift` button is clicked", () => {
    beforeEach(() => {
      gift.find(".btn-remove").simulate("click");
    });

    it("calls removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    })
  });

});