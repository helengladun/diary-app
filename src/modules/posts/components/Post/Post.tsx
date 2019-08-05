import React from 'react';
import {IPost} from "../../../shared/models/IPost";
import classNames from 'classnames';

interface IProps {
    data: IPost,
    chooseHandler: Function,
    removeHandler: Function,
    comments_count: number,
    isChecked: boolean
}

export const Post = (props: IProps) => {
    const classes = classNames({
        'post': true,
        'post_checked': props.isChecked,
    });

    const clickHandler = () => {
        props.chooseHandler(props.data.id);
    };

    const removeHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
        props.removeHandler(props.data.id);
    };

    return (
        <div className={classes} onClick={clickHandler}>
            <div className="post__inner">
                <div className="post__title-box">
                    <h3 className="post__title title">{props.data.description}</h3>
                    <span className="post__comment-count">{props.comments_count}</span>
                </div>
                <button className="post__remove-btn btn-ordinary btn-ordinary_remove" onClick={removeHandler}>Delete</button>
            </div>
        </div>
    )
};

Post.defaultProps = {
    isChecked: false
};
