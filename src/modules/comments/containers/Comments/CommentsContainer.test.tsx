import React from 'react';
import {shallow, mount, ShallowWrapper, ReactWrapper} from 'enzyme';
import {CommentsContainer} from "./CommentsContainer";
import {comments} from "../../../shared/fixtures/comments";

jest.mock('uuid', () => jest.fn(() => 123));

describe('CommentsContainer test', () => {

    let addCommentEffect: Function, clearPostComments: Function,
        wrapperShallow: ShallowWrapper<any, any, React.Component<{}, {}, any>>, wrapperMounted: ReactWrapper<any, any, React.Component<{}, {}, any>>;

    beforeEach(() => {
        addCommentEffect = jest.fn();
        clearPostComments = jest.fn();
        wrapperShallow = shallow(<CommentsContainer
            addCommentEffect={addCommentEffect}
            clearPostComments={clearPostComments}
            data={comments}
            postId={2}
        />);

        wrapperMounted = mount(<CommentsContainer
            addCommentEffect={addCommentEffect}
            clearPostComments={clearPostComments}
            data={comments}
            postId={2}
        />);
    });

    test('should render CommentsContainer correctly', () => {
        expect(wrapperShallow).toMatchSnapshot();
    });

    test('set commentText state value when onChange is fired', () => {
        const value = 'text';

        wrapperMounted.find('textarea').simulate('change', {
            target: { value }
        });

        expect(wrapperMounted.state('commentText')).toBe(value);
    });

    test('fire clearPostComments on componentWillUnmount', () => {
        wrapperShallow.unmount();
        expect(clearPostComments).toHaveBeenCalled();
    });

    test('fire addCommentEffect onSubmit form ', () => {
        const value = 'text';

        wrapperMounted.find('textarea').simulate('change', {
            target: { value }
        });

        wrapperMounted.find('textarea').simulate('keyUp', {
            which: 13,
            ctrlKey: true
        });

        expect(addCommentEffect).toHaveBeenLastCalledWith({
            id: 123,
            description: value,
            post_id: 2
        });
    });

    test('not to fire addCommentEffect if not enter and ctrl btn was clicked', () => {
        wrapperMounted.find('textarea').simulate('keyUp', {
            which: 13
        });

        expect(addCommentEffect).toHaveBeenCalledTimes(0);
    });

    test('clear commentText after submit  ', () => {
        const value = 'text';

        wrapperMounted.find('textarea').simulate('keyUp', {
            target: { value },
            which: 13,
            ctrlKey: true
        });

        expect(wrapperMounted.state('commentText')).toBe('');
    });
});