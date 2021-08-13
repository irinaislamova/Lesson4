"use strict";
/**
 * @jest-environment jsdom
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var DropdownTest_1 = require("../DropdownTest");
var enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe('DropdownTest', function () {
    test('should render', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(DropdownTest_1.DropdownTest, { children: react_1.default.createElement("div", null), button: react_1.default.createElement("button", null) }));
        console.log(window);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    });
    test('should render (snapshot)', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(DropdownTest_1.DropdownTest, { children: react_1.default.createElement("div", null), button: react_1.default.createElement("button", null) }));
        expect(wrapper).toMatchSnapshot();
    });
});
