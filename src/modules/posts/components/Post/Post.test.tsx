import React from 'react';
import {shallow} from 'enzyme';
import {Post} from "./Post";
import {IPost} from "../../../shared/models/IPost";

describe('Post component', () => {
    const data: IPost = {
        id: 10,
        description: 'some post',
    };

    const removeHandler = jest.fn();
    const chooseHandler = jest.fn();
    const wrapper = shallow(<Post data={data} removeHandler={removeHandler} chooseHandler={chooseHandler} comments_count={10} isChecked={false}/>);

    test('should render Post component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should fire removeHandler on click button', () => {
        wrapper.find('button').simulate('click', {
            stopPropagation: () => {}
        });

        expect(removeHandler).toHaveBeenLastCalledWith(data.id);
    });

    test('should fire chooseHandler on click node', () => {
        wrapper.find('div').at(0).simulate('click');

        expect(chooseHandler).toHaveBeenLastCalledWith(data.id);
    });

});