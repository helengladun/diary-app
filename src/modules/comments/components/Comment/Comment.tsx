import React, {Component} from 'react';
import {IComment} from "../../../shared/models/IComment";

interface IProps {
    data: IComment
}

export class Comment extends Component<IProps> {
    render() {
        const {data} = this.props;
        return (
            <div className="comment">
                <div className="square comment__colored-square"></div>
                <div className="comment__description">{data.description}</div>
            </div>
        );
    }
}