import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SignIn = ({ handleSignIn }) => {
  return (
    <Fragment>
      <h2>Please Sign In</h2>
      <Button onClick={handleSignIn} variant="contained" color="secondary">
        Click Here
      </Button>
    </Fragment>
  );
};

SignIn.propTypes = {
  handleSignIn: PropTypes.func,
};

export default SignIn;
