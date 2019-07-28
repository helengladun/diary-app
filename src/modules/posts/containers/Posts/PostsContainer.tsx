import React, {ChangeEvent, Component, FormEvent} from 'react';
import {IPost} from "../../../shared/models/IPost";
import {IComment} from "../../../shared/models/IComment";
import {isEmpty} from 'ramda';
import {connect} from "react-redux";
import {IApplicationState} from "../../../store/rootReducer";
import {addPostEffect, deletePostEffect, getPostsEffect} from "../../store/all-posts/effects";
import uuid from 'uuid';
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import {Post} from "../../components/Post/Post";
import {addCommentEffect, getCommentsEffect} from "../../../comments/store/all-comments/effects";
import {getPostCommentsEffect} from "../../store/comments/effects";
import Comments from "../../../comments/containers/Comments/CommentsContainer";

interface PropsFromDispatch {
    getPostsEffect: Function,
    getCommentsEffect: Function,
    addPostEffect: Function,
    getPostCommentsEffect: Function,
    addCommentEffect: Function,
    deletePostEffect: Function
}

interface PropsFromState {
    posts: IPost[],
    comments: IComment[],
    postComments: IComment[]
}

interface IProps extends PropsFromDispatch, PropsFromState {
}

interface IState {
    isCommentsVisible: boolean,
    postText: string,
    checkedPostId: number
}

export class PostsContainer extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            isCommentsVisible: false,
            postText: '',
            checkedPostId: 0
        };


        this.getPostsList = this.getPostsList.bind(this);
        this.choosePostHandler = this.choosePostHandler.bind(this);
        this.changePostHandler = this.changePostHandler.bind(this);
        this.submitPostFormHandler = this.submitPostFormHandler.bind(this);
        this.removePostHandler = this.removePostHandler.bind(this);
    }

    componentDidMount(): void {
        this.props.getPostsEffect();
        this.props.getCommentsEffect();
    }

    choosePostHandler(post_id: number) {
        this.props.getPostCommentsEffect(post_id);
        this.setState(() => ({isCommentsVisible: true, checkedPostId: post_id}))
    }

    changePostHandler(e: ChangeEvent<HTMLInputElement>) {
        const text = e.target.value;
        this.setState(() => ({postText: text}));
    }

    submitPostFormHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        this.props.addPostEffect({
            id: uuid(),
            description: this.state.postText
        });

        this.setState(() => ({
            postText: ''
        }));
    }

    removePostHandler(post_id: number) {
        this.props.deletePostEffect(post_id);
        this.setState(() => ({isCommentsVisible: false}))
    }

    render() {
        const {posts, postComments} = this.props;

        return (
            <>
                <div className="posts">
                    <h2 className="title title_1">Items</h2>
                    <AddPostForm value={this.state.postText} submitHandler={this.submitPostFormHandler} changeHandler={this.changePostHandler}/>
                    {posts && !isEmpty(posts) && this.getPostsList(posts)}
                </div>
                {this.state.isCommentsVisible && <Comments data={postComments} postId={this.state.checkedPostId}/>}
            </>
        );
    }

    private getPostsList(items: IPost[]) {
        return (
            items.map((item: IPost) => {
                const comments = this.props.comments.filter((comment: IComment) => comment.post_id === item.id);
                return (<Post key={item.id} data={item} chooseHandler={this.choosePostHandler}
                              isChecked={item.id === this.state.checkedPostId}
                              comments_count={comments.length} removeHandler={this.removePostHandler}/>)
            })
        )
    }
}

const mapStateToProps = ({posts, comments}: IApplicationState) => ({
    posts: posts.allPosts.entity,
    comments: comments.allComments.entity,
    postComments: posts.postComments.entity
});

const mapDispatchToProps: PropsFromDispatch = {
    getPostsEffect,
    getCommentsEffect,
    getPostCommentsEffect,
    addPostEffect,
    addCommentEffect,
    deletePostEffect
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);