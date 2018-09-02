import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signIn } from '../store/actions/auth';

const SignIn = ({ signIn }) => {
  return (
    <Fragment>
      <h2>Please Sign In</h2>
      <Button onClick={signIn} variant="contained" color="secondary">
        Click Here
      </Button>
    </Fragment>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func,
};

export default connect(
  null,
  { signIn }
)(SignIn);
