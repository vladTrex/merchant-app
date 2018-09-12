import { connect } from 'react-redux';
import { compose } from 'recompose';

import Home from '../components/Home';
import AuthHOC from '../HOCs/AuthHOC';
import { getAllMerchants } from '../store/selectors/merchant';
import { getAuth } from '../store/selectors/auth';

import { setOpenDialog } from '../store/actions/ui';
import { onRemoveMerchant } from '../store/actions/merchant';

const mapStateToProps = state => ({
  auth: getAuth(state),
  merchants: getAllMerchants(state),
});

export default compose(
  connect(
    mapStateToProps,
    { setOpenDialog, onRemoveMerchant }
  ),
  AuthHOC
)(Home);
