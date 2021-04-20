import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { setAlert } from "../../redux/alert/alert.action";
import { register } from "../../redux/auth/auth.action";
import PropTypes from "prop-types";
// import axios from "axios";

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            setAlert("password do not match", "danger");
        } else {
            register({ name, email, password });
        }
    };

    const { name, email, password, password2 } = formData;
    //Redirect if Register
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }
    return (
        <Fragment>
            <div>
                <h1 className='large text-primary'>Sign Up</h1>
                <p className='lead'>
                    <i className='fas fa-user' /> Create Your Account
                </p>
                <form className='form' onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                        <small className='form-text'>
                            This site uses Gravatar so if you want a profile
                            image, use a Gravatar email
                        </small>
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            minLength={6}
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            name='password2'
                            minLength={6}
                            value={password2}
                            onChange={onChange}
                        />
                    </div>
                    <input
                        type='submit'
                        className='btn btn-primary'
                        defaultValue='Register'
                    />
                </form>
                <p className='my-1'>
                    Already have an account? <Link to='/login'>Sign In</Link>
                </p>
            </div>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
