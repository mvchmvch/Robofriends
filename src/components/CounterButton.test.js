// test file
import React from 'react'
import CounterButton from './CounterButton'
import { shallow} from 'enzyme';

it("tests that CounterButton counter is working", () => {
	const mockColor = 'red'
	const wrapper = shallow(<CounterButton color={mockColor}/>);
	
	expect(wrapper.state('count')).toBe(1);

	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state('count')).toBe(2);

	expect(wrapper.prop('color')).toEqual('red');
})

