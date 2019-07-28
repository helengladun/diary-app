import React from 'react';
import {shallow} from 'enzyme';
import {AddCommentForm} from "./AddCommentForm";

describe('AddCommentForm component', () => {
    const submitHandler = jest.fn();
    const changeHandler = jest.fn();
    const wrapper = shallow(<AddCommentForm
            value={'text'}
            submitHandler={submitHandler}
            changeHandler={changeHandler}
        />);

    test('should render AddCommentForm correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

