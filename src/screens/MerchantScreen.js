import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getMerchantById, getSortedBids } from '../store/selectors/merchant';
import Merchant from '../components/Merchant';
import AuthHOC from '../HOCs/AuthHOC';
import { getIsDialogOpen } from '../store/selectors/ui';
import { setOpenDialog } from '../store/actions/ui';
import { onRemoveMerchant } from '../store/actions/merchant';
import {
  sortByDateAsc,
  sortByDateDesc,
  sortByTitle,
} from '../store/actions/sort';

const mapStateToProps = (state, { match: { params } }) => ({
  merchant: getMerchantById(state, params.id),
  sortType: state.sortType.sortingType,
  isDialogOpen: getIsDialogOpen(state),
  filteredBids: getSortedBids(
    getMerchantById(state, params.id),
    state.sortType
  ),
});

export default compose(
  AuthHOC,
  connect(
    mapStateToProps,
    {
      setOpenDialog,
      onRemoveMerchant,
      sortByDateAsc,
      sortByDateDesc,
      sortByTitle,
    }
  )
)(Merchant);
