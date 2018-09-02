import * as actionTypes from '../../constants/actionTypes';

export const addMerchant = merchant => ({
    type: actionTypes.MERCHANT_ADD_MERCHANT,
    payload: merchant
});