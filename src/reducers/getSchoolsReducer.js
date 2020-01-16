
import {GETTINGALLSCHOOLS, CONFIGUREFAIL, GETTINGALLSCHOOLSSUCCESS, CONFIGURESUCCESS, CONFIGURINGSCHOOL} from '../actions/types';

const INITIAL = {
    schools: [],
    schoolRows: [],
    schoolOptions: [],
    getting: false,
    configureSchoolLoading: false,
    configureSchoolMessage: ''
}
export default (state = INITIAL, action ) => {

    switch (action.type) {
        case GETTINGALLSCHOOLS:
            return {...state, getting: true};
        
        case GETTINGALLSCHOOLSSUCCESS:
            return {...state, schools: action.payload, schoolRows: action.secondPayload, getting: false, schoolOptions: action.thirdPayload};
        
        case CONFIGURINGSCHOOL: 
            return {...state, configureSchoolLoading: true, configureSchoolMessage : '' };

        case CONFIGURESUCCESS:
            return {...state, configureSchoolLoading: false, configureSchoolMessage : ''};

        case CONFIGUREFAIL:
            return {...state, configureSchoolLoading: false,  configureSchoolMessage: action.payload};

        default:
            return state;
    }

}