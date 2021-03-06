import * as actionTypes from '../../constants/actionTypes';
import {setOpenDialog} from './ui';

export const addMerchant = merchant => ({
    type: actionTypes.MERCHANT_ADD_MERCHANT,
    payload: merchant
});

export const removeMerchant = merchantId => ({
    type: actionTypes.MERCHANT_REMOVE_MERCHANT,
    payload: {merchantId}
});

export const editMerchant = merchant => ({
    type: actionTypes.MERCHANT_EDIT_MERCHANT,
    payload: merchant
});

export const fetchMerchants = merchants => ({
    type: actionTypes.MERCHANT_FETCH_MERCHANTS,
    payload: merchants
});

// thunks
export const onEditMechant = (merchant, cb) => dispatch => {
    dispatch(editMerchant(merchant));
    return cb();
};

export const onRemoveMerchant = (merchantId, cb) => dispatch => {
    dispatch(setOpenDialog());
    dispatch(removeMerchant(merchantId));
    return cb();
};