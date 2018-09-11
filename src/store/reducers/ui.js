import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    isShownSnackbar: false,
    activeTab: 0,
    isDialogOpen: false
};

export default (state = initialState, action) => {
    switch (action.type){
        case actionTypes.UI_IS_DIALOG_OPEN:
            return {...state, isDialogOpen: !state.isDialogOpen};
        case actionTypes.AUTH_SIGN_OUT:
            return initialState;
    }
    return state;
};