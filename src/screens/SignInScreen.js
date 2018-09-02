import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { doSignIn } from '../store/actions/auth';
import SignIn from '../components/SignIn';

export default compose(
  connect(
    null,
    { doSignIn }
  ),
  withHandlers({
    handleSignIn: ({ history, doSignIn }) => () => {
      return doSignIn(() => history.push('/'));
    },
  })
)(SignIn);
