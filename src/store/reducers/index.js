import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { auth } from './auth';
import { merchants } from './merchant';
import sortType from './sort';
import ui from './ui';

const rootReducer = combineReducers({
    merchants,
    ui,
    sortType,
    app: auth,
    form: formReducer
});

export default rootReducer;