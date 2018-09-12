import * as actionTypes from '../../constants/actionTypes';

export const setOpenDialog = () => ({
    type: actionTypes.UI_IS_DIALOG_OPEN,
});

export const setActiveTab = (activeTab = 0) => ({
    type: actionTypes.UI_SET_ACTIVE_TAB,
    payload: activeTab
});