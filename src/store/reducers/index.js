import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { auth } from './auth';
import { merchants } from './merchant';
import ui from './ui';

const rootReducer = combineReducers({
    merchants,
    ui,
    app: auth,
    form: formReducer
});

export default rootReducer;