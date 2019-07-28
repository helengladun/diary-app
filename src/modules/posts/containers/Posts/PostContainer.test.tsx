import React from 'react';
import {shallow, mount, ShallowWrapper, ReactWrapper} from 'enzyme';
import {PostsContainer} from "./PostsContainer";
import {comments} from "../../../shared/fixtures/comments";
import {posts} from "../../../shared/fixtures/posts";

jest.mock('uuid', () => jest.fn(() => 234));

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
        />);
    });

    test('should render PostsContainer correctly', () => {
        expect(wrapperShallow).toMatchSnapshot();
    });

    test('set getPostsEffect, getCommentsEffect to false  on componentDidMount', () => {
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

        expect(addPostEffect).toHaveBeenLastCalledWith({
            id: 234,
            description: value
        });
    });

    test('fire deletePostEffect on click remove button on post', () => {
        wrapperMounted.find('button.post__remove-btn').at(0).simulate('click');
        expect(deletePostEffect).toHaveBeenLastCalledWith(1);
    });

    // test('fire deletePostEffect onDelete item', () => {
    //     wrapperShallow.dive().find('.post').at(0).simulate('click');
    //     expect(getPostCommentsEffect).toHaveBeenLastCalledWith(1);
    // });
});