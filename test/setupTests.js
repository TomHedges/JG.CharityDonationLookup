import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import "@babel/polyfill";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.renderer = renderer;
