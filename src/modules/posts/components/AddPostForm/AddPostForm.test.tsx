import React from 'react';
import {shallow} from 'enzyme';
import AddPostForm from "./AddPostForm";

describe('AddCommentForm component', () => {
    const submitHandler = jest.fn();
    const changeHandler = jest.fn();
    const wrapper = shallow(<AddPostForm
        value={'text'}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
    />);

    test('should render AddPostForm correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

