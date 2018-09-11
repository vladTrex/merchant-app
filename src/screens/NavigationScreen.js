import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import { getAuth } from '../store/selectors/auth';

const mapStateToProps = state => ({
  auth: getAuth(state),
});

export default connect(mapStateToProps)(Navigation);
