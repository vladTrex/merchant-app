import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getMerchantById } from '../store/selectors/merchant';
import Merchant from '../components/Merchant';
import AuthHOC from '../HOCs/AuthHOC';
import { getIsDialogOpen } from '../store/selectors/ui';
import { setOpenDialog } from '../store/actions/ui';
import { onRemoveMerchant } from '../store/actions/merchant';

const mapStateToProps = (state, ownProps) => ({
  merchant: getMerchantById(state, ownProps.match.params.id),
  isDialogOpen: getIsDialogOpen(state),
});

export default compose(
  connect(
    mapStateToProps,
    { setOpenDialog, onRemoveMerchant }
  ),
  AuthHOC
)(Merchant);
