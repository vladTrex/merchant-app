import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    auth: false
};

export const auth = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.AUTH_SET_STATUS:
            return {...state, auth: !state.auth};
    }
    return state;
};