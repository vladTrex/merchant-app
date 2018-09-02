// add merchant
// remove merchant
// update merchant


import * as actionTypes from "../../constants/actionTypes";

const initialState = [];


export const merchant = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.MERCHANT_ADD_MERCHANT:
            return [...state, action.payload];
    }
    return state;
};