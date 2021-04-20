import React from "react";
import PropTypes from "prop-types";

const ProfileEducation = ({
    education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
    <div>
        <h3 className='text-dark'>{school}</h3>
        <p>
            {from} - {to ? to : "Now"}
        </p>
        <p>
            <strong>Degree: </strong> {degree}
        </p>
        <p>
            <strong>Field Of Study: </strong> {fieldofstudy}
        </p>
        <p>
            <strong>Description: </strong> {description}
        </p>
    </div>
);

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired,
};

export default ProfileEducation;
