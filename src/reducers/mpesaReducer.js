
import {GETTINGMPESA, GETTINGMPESASUCCESS} from '../actions/types';

const INITIAL = {
    mpesaRows: [],
    cashSum: 0
   
}
export default (state = INITIAL, action ) => {

    switch (action.type) {
        case GETTINGMPESA:
            return {...state};
        
        case GETTINGMPESASUCCESS:
            return {...state, mpesaRows: action.payload, cashSum: action.payloadSum };
        
        default:
            return state;
    }

}