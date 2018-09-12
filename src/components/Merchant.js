import React from 'react';
import PropTypes from 'prop-types';
import PromptDialog from './partials/PromptDialog';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

import { StyledHeaderActions, StyledHeaderH1 } from './partials/styles';
import MerchantList from './partials/MerchantList';

const Merchant = ({
  merchant,
  history,
  onRemoveMerchant,
  setOpenDialog,
  isDialogOpen,
}) => {
  const EditLink = props => (
    <Link to={`/merchant/edit/${merchant.id}`} {...props} />
  );
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
};

export default Merchant;
