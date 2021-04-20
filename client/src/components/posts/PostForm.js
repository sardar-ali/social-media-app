import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../redux/post/post.action";

const PostForm = ({ addPost }) => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addPost({ text });
        setText("");
    };

    return (
        <div className='post-form'>
            <div className='bg-primary p'>
                <h3>Say Something...</h3>
            </div>
            <form className='form my-1' onSubmit={onSubmit}>
                <textarea
                    name='text'
                    cols={30}
                    rows={5}
                    placeholder='Create a post'
                    required
                    defaultValue={""}
                    value={text}
                    onChange={onChange}
                />
                <input
                    type='submit'
                    className='btn btn-dark my-1'
                    defaultValue='Submit'
                />
            </form>
        </div>
    );
};

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
