import React from 'react';
import {shallow} from 'enzyme';
import {Sidebar} from './Sidebar';

describe('Sidebar component', () => {
    const wrapper = shallow(<Sidebar/>);

    it('make snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});