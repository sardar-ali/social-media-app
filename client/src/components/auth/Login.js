import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { login } from "../../redux/auth/auth.action";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    const { email, password } = formData;

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }
    return (
        <Fragment>
            <div>
                <h1 className='large text-primary'>Sign In</h1>
                <p className='lead'>
                    <i className='fas fa-user' /> Sign Into Your Account
                </p>
                <form className='form' onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            minLength={6}
                            value={password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <input
                        type='submit'
                        className='btn btn-primary'
                        defaultValue='Login'
                    />
                </form>
                <p className='my-1'>
                    Don't have an account? <Link to='/register'>Sign up</Link>
                </p>
            </div>
        </Fragment>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
