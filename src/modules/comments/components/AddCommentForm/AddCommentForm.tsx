import React, {ChangeEvent, KeyboardEvent} from 'react';

interface IProps {
    submitHandler: (e: KeyboardEvent<HTMLTextAreaElement>) => void,
    changeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    value: string
}

export const AddCommentForm = (props: IProps) => (
    <form className="textarea-box">
        <div className="square textarea-box__colored-square"></div>
        <textarea
            className="textarea-box__textarea primary-textarea"
            value={props.value}
            onKeyUp={props.submitHandler}
            onChange={props.changeHandler}/>
    </form>
);