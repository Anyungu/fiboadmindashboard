
import {GETTINGALLDEVICES, GETTINGALLDEVICESSUCCESS} from '../actions/types';

const INITIAL = {
    deviceRows: [],
   
}
export default (state = INITIAL, action ) => {

    switch (action.type) {
        case GETTINGALLDEVICES:
            return {...state, getting: true};
        
        case GETTINGALLDEVICESSUCCESS:
            return {...state, deviceRows: action.payload };
        
        default:
            return state;
    }

}