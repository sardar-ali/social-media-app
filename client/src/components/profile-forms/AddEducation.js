import React, { Fragment, useState } from "react";
import PropType from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../redux/profile/profile.action";

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: "",
        degree: "",
        fieldofstudy: "",
        from: "",
        to: "",
        current: false,
        description: "",
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description,
    } = formData;

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addEducation(formData, history);
    };

    return (
        <Fragment>
            <h1 className='large text-primary'>Add An Education</h1>
            <p className='lead'>
                <i className='fas fa-code-branch' /> Add any School or Bootcomp
                that you are attended
            </p>
            <small>* = required field</small>
            <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* School or Bootcomp'
                        name='school'
                        value={school}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Degree or Certificate'
                        name='degree'
                        value={degree}
                        onChange={onChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Field of Study'
                        name='fieldofstudy'
                        value={fieldofstudy}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <h4>From Date</h4>
                    <input
                        type='date'
                        name='from'
                        value={from}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <p>
                        <input
                            type='checkbox'
                            name='current'
                            checked={current}
                            onChange={(e) => {
                                setFormData({ ...formData, current: !current });
                                toggleDisabled(!toDateDisabled);
                            }}
                            defaultValue
                        />{" "}
                        Current School
                    </p>
                </div>
                <div className='form-group'>
                    <h4>To Date</h4>
                    <input
                        type='date'
                        name='to'
                        value={to}
                        onChange={onChange}
                        disabled={toDateDisabled ? "disabled" : ""}
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        name='description'
                        cols={30}
                        rows={5}
                        placeholder='Program Description'
                        defaultValue={""}
                        value={description}
                        onChange={onChange}
                    />
                </div>
                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </Fragment>
    );
};

AddEducation.propTypes = {
    addEducation: PropType.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
