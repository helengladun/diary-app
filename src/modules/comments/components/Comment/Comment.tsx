import React, {Component} from 'react';
import {IComment} from "../../../shared/models/IComment";

interface IProps {
    data: IComment
}

export const Comment = ({data}: IProps) => (
    <div className="comment">
        <div className="square comment__colored-square"></div>
        <div className="comment__description">{data.description}</div>
    </div>
);