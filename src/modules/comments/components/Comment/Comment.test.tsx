import React from 'react';
import {shallow} from 'enzyme';
import {Comment} from "./Comment";
import {IComment} from "../../../shared/models/IComment";

describe('Comment component', () => {
    const data: IComment = {
        id: 1,
        description: 'some text',
        post_id: 2
    };


    test('should render Comment component correctly', () => {
        const wrapper = shallow(<Comment data={data}/>);
        expect(wrapper).toMatchSnapshot();
    });
});