
import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import getSchoolsReducer from './getSchoolsReducer';
import devicesReducer from './devicesReducer';
import parentReducer from './parentReducer';
import mpesaReducer from './mpesaReducer';
import noticeReducer from './noticeReducer';

export default combineReducers ({
    loginReducer,
    getSchoolsReducer,
    devicesReducer,
    parentReducer,
    mpesaReducer,
    noticeReducer
});