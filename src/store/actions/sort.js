import * as actionTypes from '../../constants/actionTypes';

export const sortByTitle = () => ({
    type: actionTypes.BID_SORT_BY_TITLE,
    payload: 'title'
});

export const sortByDateAsc = () => ({
    type: actionTypes.BID_SORT_BY_CREATED_ASC,
    payload: 'asc'
});

export const sortByDateDesc = () => ({
    type: actionTypes.BID_SORT_BY_CREATED_DESC,
    payload: 'desc'
});