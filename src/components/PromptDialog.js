import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const PromptDialog = ({ open, title, handleClose, handleOk }) => {
    return (
      <Dialog open={open} onClose={this.handleClose}>
        {title && <DialogTitle id="alert-dialog-title">{'Use Google\'s location service?'}</DialogTitle>}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
          <Button onClick={handleOk} color="primary" autoFocus>
                    Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
}

PromptDialog.propTypes = {
    open: PropTypes.bool,
    handleOk: PropTypes.func,
    handleClose: PropTypes.func,
    title: PropTypes.string,
};

export default PromptDialog;