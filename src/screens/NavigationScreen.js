import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import { getAuth } from '../store/selectors/auth';
import { doSignOut } from '../store/actions/auth';
import { setActiveTab } from '../store/actions/ui';

const mapStateToProps = state => ({
  auth: getAuth(state),
  activeTab: state.ui.activeTab,
});

export default connect(
  mapStateToProps,
  { doSignOut, setActiveTab }
)(Navigation);
