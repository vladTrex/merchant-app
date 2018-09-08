import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { auth } from './auth';
import { merchant } from './merchant';
import ui from './ui';

const rootReducer = combineReducers({
    merchant,
    ui,
    app: auth,
    form: formReducer
});

export default rootReducer;