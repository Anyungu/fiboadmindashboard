
import {LOGGINGIN, LOGINSUCCESS, LOGINFAIL} from '../actions/types';

const INITIAL = {
    name: '',
    password: '',
    loggingIn: false,
    errorMessage: '',
    token: '',
}
export default (state = INITIAL, action ) => {

    switch (action.type) {
        case LOGGINGIN:
            return {...state, loggingIn: true };
        
        case LOGINFAIL:
            return {...state, loggingIn: false, errorMessage: action.payload};

        case LOGINSUCCESS:
            return {...state, loggingIn: false, token: action.payload};
        
        default:
            return state;
    }

}