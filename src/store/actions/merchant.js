import * as actionTypes from '../../constants/actionTypes';

export const addMerchant = merchant => ({
    type: actionTypes.MERCHANT_ADD_MERCHANT,
    payload: merchant
});

export const fetchMerchants = merchants => ({
    type: actionTypes.MERCHANT_FETCH_MERCHANTS,
    payload: merchants
});