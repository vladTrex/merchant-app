import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    auth: false
};

export const auth = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.AUTH_SIGN_IN:
            return {...state, auth: true};
        case actionTypes.AUTH_SIGN_OUT:
            return {...state, auth: false};
    }
    return state;
};