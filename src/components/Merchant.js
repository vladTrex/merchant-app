import React from 'react';
import PropTypes from 'prop-types';
import PromptDialog from './partials/PromptDialog';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import { StyledHeaderActions, StyledHeaderH1 } from './partials/styles';
import MerchantList from './partials/MerchantList';
import Bids from './partials/Bids';

const Merchant = ({
  merchant,
  history,
  onRemoveMerchant,
  setOpenDialog,
  isDialogOpen,
  sortByTitle,
  sortByDateAsc,
  sortByDateDesc,
  filteredBids,
  sortType,
}) => {
  const EditLink = props => (
    <Link to={`/merchant/edit/${merchant.id}`} {...props} />
  );
  if (isEmpty(merchant)) return null;
  return (
    <div>
      <StyledHeaderActions>
        <StyledHeaderH1>
          {merchant.firstName} {merchant.lastName}
        </StyledHeaderH1>
        <Button
          onClick={setOpenDialog}
          variant="flat"
          color="secondary"
          size="small"
        >
          Remove
          <DeleteIcon />
        </Button>
        <Button
          variant="flat"
          color="primary"
          size="small"
          component={EditLink}
        >
          Edit
          <EditIcon />
        </Button>
      </StyledHeaderActions>
      <MerchantList merchant={merchant} />
      <h2>Bids</h2>
      <Button variant="flat" color="primary" size="small" onClick={sortByTitle}>
        Sort by title
      </Button>
      <Button
        variant="flat"
        color="primary"
        size="small"
        onClick={sortType === 'desc' ? sortByDateAsc : sortByDateDesc}
      >
        {sortType === 'desc' ? (
          <strong>Sort by date ascending</strong>
        ) : (
          <strong>Sort by date descending</strong>
        )}
      </Button>
      <Bids bids={filteredBids} />

      <PromptDialog
        handleOk={() => onRemoveMerchant(merchant.id, () => history.push('/'))}
        handleClose={setOpenDialog}
        open={isDialogOpen}
        title={'Are you sure to delete this merchant?'}
      />
    </div>
  );
};

Merchant.propTypes = {
  merchant: PropTypes.object.isRequired,
  isDialogOpen: PropTypes.bool,
  setOpenDialog: PropTypes.func,
  onRemoveMerchant: PropTypes.func,
  history: PropTypes.object,
  sortByTitle: PropTypes.func,
  sortByDateDesc: PropTypes.func,
  sortByDateAsc: PropTypes.func,
  filteredBids: PropTypes.array,
  sortType: PropTypes.string,
};

export default Merchant;
