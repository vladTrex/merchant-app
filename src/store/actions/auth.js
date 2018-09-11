import * as actionTypes from '../../constants/actionTypes';
import {persistor} from '../index';

import {fetchMerchants} from './merchant';

export const signIn = () => ({
    type: actionTypes.AUTH_SIGN_IN,
});

export const signOut = () => ({
    type: actionTypes.AUTH_SIGN_OUT
});

// thunks
export const doSignIn = cb => async dispatch => {

    try {
        await fetch('/store.json')
            .then((res) => res.json())
            .then((data) => {
                dispatch(fetchMerchants(data.merchants));
            });

        dispatch(signIn());

        return cb();

    } catch (e) {
        throw new Error();
    }
};

export const doSignOut = () => dispatch => {
    dispatch(signOut());
    return persistor.purge();
};