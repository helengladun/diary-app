import React, {ChangeEvent, Component, KeyboardEvent} from 'react';
import {isEmpty} from "ramda";
import {IComment} from "../../../shared/models/IComment";
import {AddCommentForm} from "../../components/AddCommentForm/AddCommentForm";
import {Comment} from "../../components/Comment/Comment";
import {addCommentEffect} from "../../store/all-comments/effects";
import {connect} from "react-redux";
import {clearPostComments} from "../../../posts/store/comments/actions";
import uuid from 'uuid';

interface PropsFromDispatch {
    addCommentEffect: Function,
    clearPostComments: Function
}

interface IProps extends PropsFromDispatch {
    data: IComment[],
    postId: number
}

interface IState {
    commentText: string,
}

export class CommentsContainer extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            commentText: '',
        };

        this.changeCommentHandler = this.changeCommentHandler.bind(this);
        this.submitCommentFormHandler = this.submitCommentFormHandler.bind(this);
        this.clearCommentValue = this.clearCommentValue.bind(this);
    }

    componentWillUnmount(): void {
        this.props.clearPostComments()
    }

    changeCommentHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        const text = e.target.value;
        this.setState(() => ({commentText: text}));
    }

    clearCommentValue() {
        this.setState(() => ({commentText: ''}));
    }

    submitCommentFormHandler(e: KeyboardEvent<HTMLTextAreaElement>) {
        e.preventDefault();

        if (e.which === 13 && e.ctrlKey) {
            this.props.addCommentEffect({
                id: uuid(),
                description: this.state.commentText,
                post_id: this.props.postId
            });

            this.clearCommentValue();
        }
    }
    
    render() {
        return (
            <div className="comments">
                <h2 className="comments__title title title_1">Comments #{this.props.postId}</h2>
                {!isEmpty(this.props.data) && this.props.data && this.getCommentsList(this.props.data)}
                <AddCommentForm changeHandler={this.changeCommentHandler}
                                value={this.state.commentText}
                                submitHandler={this.submitCommentFormHandler}/>
            </div>
        );
    }

    private getCommentsList(items: IComment[]) {
        return (
            <div className="comments__content">
                {items.map((item: IComment) => (
                    <Comment key={item.id} data={item}/>
                ))}
            </div>
        )
    }
}

const mapDispatchToProps: PropsFromDispatch = {
    addCommentEffect,
    clearPostComments
};

export default connect(null, mapDispatchToProps)(CommentsContainer);