import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Spinner from "../layout/Spinner";
import { getProfiles } from "../../redux/profile/profile.action";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getProfiles, profile }) => {
    const { profiles, loading } = profile;

    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <h4 className='large text-primary'>Developers</h4>
                    <p className='lead'>
                        <i className='fab fa-connectdevelop'> </i> Browse and
                        connect with developer
                    </p>
                    <div className='profiles'>
                        {profiles.length > 0 ? (
                            profiles.map((profile) => (
                                <ProfileItem
                                    key={profile._id}
                                    profile={profile}
                                />
                            ))
                        ) : (
                            <h4>No profiles found ..</h4>
                        )}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
