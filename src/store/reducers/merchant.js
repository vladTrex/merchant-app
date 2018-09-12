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
        case actionTypes.MERCHANT_EDIT_MERCHANT:
            return state.map(merchant => {
                if(merchant.id !== action.payload.id) return merchant;

                return action.payload;
            });
        case actionTypes.AUTH_SIGN_OUT:
            return [];
    }
    return state;
};