import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App component', () => {
    const wrapper = shallow(<App/>);

    it('make snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});