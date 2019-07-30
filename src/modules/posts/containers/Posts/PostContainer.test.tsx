import React from 'react';
import {shallow, mount, ShallowWrapper, ReactWrapper} from 'enzyme';
import {PostsContainer} from "./PostsContainer";
import {comments} from "../../../shared/fixtures/comments";
import {posts} from "../../../shared/fixtures/posts";
import configureStore from 'redux-mock-store';
import {Post} from "../../components/Post/Post";

jest.mock('uuid', () => jest.fn(() => 234));

let mockedStore = configureStore([])({});

jest.mock('../../../comments/containers/Comments/CommentsContainer', () => ()=> <div id="mockCommentsContainer">
    mockCommentsContainer
</div>);

describe('PostContainer test', () => {

    let getPostsEffect: Function, getCommentsEffect: Function, getPostCommentsEffect: Function,
        addPostEffect: Function, addCommentEffect: Function, deletePostEffect: Function,
        wrapperShallow: ShallowWrapper<any, any, React.Component<{}, {}, any>>, wrapperMounted: ReactWrapper<any, any, React.Component<{}, {}, any>>;

    beforeEach(() => {
        getPostsEffect = jest.fn();
        getCommentsEffect = jest.fn();
        getPostCommentsEffect = jest.fn();
        addPostEffect = jest.fn();
        addCommentEffect = jest.fn();
        deletePostEffect = jest.fn();

        wrapperShallow = shallow(<PostsContainer
            getCommentsEffect={getCommentsEffect}
            getPostCommentsEffect={getPostCommentsEffect}
            addPostEffect={addPostEffect}
            addCommentEffect={addCommentEffect}
            deletePostEffect={deletePostEffect}
            getPostsEffect={getPostsEffect}
            posts={posts}
            comments={comments}
            postComments={[comments[0], comments[1]]}
        />);

        wrapperMounted = mount(<PostsContainer
            getCommentsEffect={getPostsEffect}
            getPostCommentsEffect={getPostCommentsEffect}
            addPostEffect={addPostEffect}
            addCommentEffect={addCommentEffect}
            deletePostEffect={deletePostEffect}
            getPostsEffect={getPostsEffect}
            posts={posts}
            comments={comments}
            postComments={[comments[0], comments[1]]}
        />, {context: { store: mockedStore }});
    });

    test('should render PostsContainer correctly', () => {
        expect(wrapperShallow).toMatchSnapshot();
    });

    test('fire getPostsEffect, getCommentsEffect on componentDidMount', () => {
        expect(getCommentsEffect).toHaveBeenCalled();
        expect(getPostsEffect).toHaveBeenCalled();
    });

    test('fire AddPostForm onSubmit form ', () => {
        const value = 'text';

        wrapperMounted.find('input').simulate('change', {
            target: { value }
        });

        wrapperMounted.find('form').simulate('submit', {
            preventDefault: () => {}
        });

        expect(wrapperMounted.state('postText')).toBe('');

        expect(addPostEffect).toHaveBeenLastCalledWith({
            id: 234,
            description: value
        });
    });

    test('fire deletePostEffect on click remove button on post', () => {
        wrapperMounted.find('button.post__remove-btn').at(0).simulate('click');
        expect(deletePostEffect).toHaveBeenLastCalledWith(1);
        expect(wrapperMounted.state('isCommentsVisible')).toBeFalsy();
    });

    test('fire getPostCommentsEffect on click item', () => {
        wrapperMounted.find('.post').at(0).simulate('click');
        expect(getPostCommentsEffect).toHaveBeenLastCalledWith(1);
        expect(wrapperMounted.state('isCommentsVisible')).toBeTruthy();
    });

    test('set postText onChange input', () => {
        const value = 'some text';
        wrapperMounted.find('input').simulate('change', {
            target: {value}
        });

        expect(wrapperMounted.state('postText')).toBe(value);
    });

    test('renders posts', () => {
        expect(wrapperShallow.find(Post)).toHaveLength(2);
    });
});