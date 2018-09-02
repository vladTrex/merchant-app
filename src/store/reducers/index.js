import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { auth } from './auth';
import { merchant } from "./merchant";

const rootReducer = combineReducers({
    merchant,
    app: auth,
    form: formReducer
});

export default rootReducer;