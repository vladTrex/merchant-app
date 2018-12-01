import * as actionTypes from '../../constants/actionTypes';
const initialState = {
    sortingType: '',
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.BID_SORT_BY_TITLE:
            return {
                ...state,
                sortingType: action.payload
            };
        case actionTypes.BID_SORT_BY_CREATED_DESC:
        case actionTypes.BID_SORT_BY_CREATED_ASC:
            return {
                ...state,
                sortingType: action.payload
            };
        case actionTypes.AUTH_SIGN_OUT:
            return initialState;
        default:
            return state;
    }
};
