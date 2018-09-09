import React from 'react';
import PropTypes from 'prop-types';
import PromptDialog from './partials/PromptDialog';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Merchant = ({
  merchant,
  history,
  onRemoveMerchant,
  setOpenDialog,
  isDialogOpen,
}) => (
  <div>
    <h2>
      {merchant.firstName} {merchant.lastName}
    </h2>
    <PromptDialog
      handleOk={() => onRemoveMerchant(merchant.id, () => history.push('/'))}
      handleClose={setOpenDialog}
      open={isDialogOpen}
      title={'Are you sure to delete this merchant?'}
    />
    <Button
      onClick={setOpenDialog}
      variant="contained"
      color="secondary"
      size="small"
    >
      Remove this merchant
      <DeleteIcon />
    </Button>
  </div>
);

Merchant.propTypes = {
  merchant: PropTypes.object.isRequired,
  isDialogOpen: PropTypes.bool,
  setOpenDialog: PropTypes.func,
  onRemoveMerchant: PropTypes.func,
  history: PropTypes.object,
};

export default Merchant;
