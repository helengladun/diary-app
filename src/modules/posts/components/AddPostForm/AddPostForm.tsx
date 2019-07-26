import React, {ChangeEvent, FormEvent} from 'react';

interface IProps {
    submitHandler: (e: FormEvent<HTMLFormElement>) => void,
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

const AddPostForm = (props: IProps) => (
    <form className="main-form main-form_post" onSubmit={props.submitHandler}>
        <input className="primary-input" type="text" placeholder="Type name here..." onChange={props.changeHandler} value={props.value}/>
        <button className="btn-ordinary">
            <span className="btn-ordinary__text">Add new</span>
        </button>
    </form>
);

export default AddPostForm;