// add merchant
// remove merchant
// update merchant

import * as actionTypes from '../../constants/actionTypes';

const initialState = [];

export const merchants = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.MERCHANT_ADD_MERCHANT:
            return [...state, action.payload];
        case actionTypes.MERCHANT_FETCH_MERCHANTS:
            return state.concat(action.payload);
        case actionTypes.MERCHANT_REMOVE_MERCHANT:
            return state.filter(merchant => merchant.id !== action.payload.merchantId);
    }
    return state;
};