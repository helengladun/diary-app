import React from 'react';
import {shallow} from 'enzyme';
import Layout from './Layout';

describe('Layout component', () => {
    const wrapper = shallow(<Layout/>);

    it('make snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});