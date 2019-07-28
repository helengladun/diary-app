import React, {Component} from 'react';
import {IPost} from "../../../shared/models/IPost";
import classNames from 'classnames';

interface IProps {
    data: IPost,
    chooseHandler: Function,
    removeHandler: Function,
    comments_count: number,
    isChecked: boolean
}

export class Post extends Component<IProps> {
    static defaultProps = {
        isChecked: false
    };

    constructor(props: IProps) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
    }

    clickHandler() {
        this.props.chooseHandler(this.props.data.id);
    }

    removeHandler(e: React.MouseEvent) {
        e.stopPropagation();
        this.props.removeHandler(this.props.data.id);
    }

    render() {
        const {data} = this.props;

        const classes = classNames({
            'post': true,
            'post_checked': this.props.isChecked,
        });

        return (
            <div className={classes} onClick={this.clickHandler}>
                <div className="post__inner">
                    <div className="post__title-box">
                        <h3 className="post__title title">{data.description}</h3>
                        <span className="post__comment-count">{this.props.comments_count}</span>
                    </div>
                    <button className="post__remove-btn btn-ordinary btn-ordinary_remove" onClick={this.removeHandler}>Delete</button>
                </div>
            </div>
        )
    }
}
