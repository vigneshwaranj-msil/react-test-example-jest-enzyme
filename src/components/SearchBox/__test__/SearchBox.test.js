/*
    File name - SearchBox.test.js
    Created on - Wednesday 08 December 2021 11:27:24 PM
    Last Modified On- Wednesday 08 December 2021 11:28:39 PM
    Author -  Vigneshwaran Jheyaraman (VickySuraj)
*/

import SearchBox from "../SearchBox";
import {mount} from "enzyme";
import {act, waitFor} from "@testing-library/react";
import React from "react";

describe("Test Search box component", () => {
    let searchComp = null;
    const namesList = fetch("Name");
    beforeEach(async () => {
        jest.spyOn(React, 'useEffect').mockImplementation((e) => {});
        searchComp =  mount(<SearchBox names={namesList.json()}/>);
        searchComp.update();
    });
    afterEach(() => {
        searchComp.unmount();
    });
    test("Search box rendered", () => {
        expect(searchComp).not.toBe(null);
        expect(searchComp.exists()).toBeTruthy();
    });
    test("Update input entry and check if component is getting updated", async () => {
        let inputComp = searchComp.find('input');
        expect(inputComp.prop('value')).toMatch("");
        inputComp.invoke('onChange')({target:{value:"gen"}});
        inputComp = searchComp.find('input');
        expect(inputComp.prop('value')).toMatch("gen");
        const namesList = searchComp.find({className:"names-list"});
        expect(namesList.children().length).toBe(1);
    });
});
