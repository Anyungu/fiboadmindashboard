

import {GETTINGALLPARENTS, GETTINGALLPARENTSSUCCESS} from '../actions/types';

const INITIAL = {
    parentRows: [],
   
}
export default (state = INITIAL, action ) => {

    switch (action.type) {
        case GETTINGALLPARENTS:
            return {...state};
        
        case GETTINGALLPARENTSSUCCESS:
            return {...state, parentRows: action.payload };
        
        default:
            return state;
    }

}