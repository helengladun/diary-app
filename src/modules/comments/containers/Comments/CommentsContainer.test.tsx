import React from 'react';
import {shallow} from 'enzyme';
import {CommentsContainer} from "./CommentsContainer";
import {comments} from "../../../shared/fixtures/comments";

describe('CommentsContainer test', () => {

    const addCommentEffect = jest.fn();
    const clearPostComments = jest.fn();
    const wrapper = shallow(<CommentsContainer
        addCommentEffect={addCommentEffect}
        clearPostComments={clearPostComments}
        data={comments}
        postId={2}
    />);

    test('should render CommentsContainer correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});