import { combineReducers } from 'redux';

import { auth } from './auth';

const rootReducer = combineReducers({
    app: auth
});

export default rootReducer;