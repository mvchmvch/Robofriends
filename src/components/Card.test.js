// test file
import React from 'react'
import Card from './Card'
import { shallow, mount, render } from 'enzyme';

it("test Card", () => {
	expect(shallow(<Card />)).toMatchSnapshot();
 
})
