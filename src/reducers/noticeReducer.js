import {CREATINGNOTICE, CREATINGNOTICEFAIL,  CREATINGNOTICESUCCESS} from '../actions/types';

const INITIAL = {
    message: '',
   
}

export default (state = INITIAL, action ) => {

    switch (action.type) {
        case CREATINGNOTICE:
            return {...state};
        
        case CREATINGNOTICESUCCESS:
            return {...state, message: action.payload };

        
        case CREATINGNOTICEFAIL:
            return {...state, message: action.payload };
        
        default:
            return state;
    }

}