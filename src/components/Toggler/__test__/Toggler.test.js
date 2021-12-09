/*
    File name - Toggler.test.js
    Created on - Wednesday 08 December 2021 05:01:28 PM
    Last Modified On- Wednesday 08 December 2021 05:20:17 PM
    Author -  Vigneshwaran Jheyaraman (VickySuraj)
*/

import Toggler from "../Toggler";
import {create} from "react-test-renderer";
import {mount} from "enzyme";
describe("Toggler component functionality test", () => {
    let value = false,
        setValue = () => {value = !value},
        togglerComp = null;
    const label = "This is sample label";
    beforeEach(() => {
        togglerComp = mount(<Toggler value={value} onChange={setValue} label={label} />);
    });
    afterEach(() => {
        togglerComp.unmount();
    });
    test("Toggler's label is initially not visible since the value is false", () => {
        expect(togglerComp.prop('value')).toBeFalsy();
        expect(togglerComp.find({className:'toggle-label'}).exists()).toBeFalsy();
    });
    test("Toggler's label visible after value change", () => {
        togglerComp.invoke('onChange')();
        togglerComp.setProps({ value });
        togglerComp.update();
        expect(togglerComp.prop('value')).not.toBeFalsy();
        expect(togglerComp.first().exists()).toBeTruthy();
    });

});
