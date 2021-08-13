/**
 * @jest-environment jsdom
 */


import React from 'react';
import { shallow, configure } from 'enzyme';
import { DropdownTest } from '../DropdownTest';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('DropdownTest', () => {
	test('should render', () => {
		const wrapper = shallow(<DropdownTest  
			children={<div />}
			button={<button />}
			/>)
		console.log(window);
		expect(wrapper).toBeDefined();
		expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
	})
	test('should render (snapshot)', () => {
		const wrapper = shallow(<DropdownTest 
			children={<div />}
			button={<button />}
			/>)
		expect(wrapper).toMatchSnapshot();
	})
})
