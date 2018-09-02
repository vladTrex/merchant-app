import * as actionTypes from '../../constants/actionTypes';

import {fetchMerchants} from './merchant';

export const signIn = () => ({
    type: actionTypes.AUTH_SIGN_IN,
});

export const doSignIn = cb => dispatch => {

    try {
        fetch('/store.json')
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