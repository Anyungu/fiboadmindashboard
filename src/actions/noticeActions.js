import {CREATINGNOTICE, CREATINGNOTICEFAIL, CREATINGNOTICESUCCESS} from './types';
import axios from 'axios';


export const createSchoolNotice = (schoolCode, noticeMessage, audience, title, token) => {

    return (dispatch) => {

        dispatch ({
            type: CREATINGNOTICE
        })

        let axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
          };

          axios.get(`http://167.71.34.237:8080/schools/${schoolCode}`, axiosConfig)
          .then (response => {
              if (response.data.code === 200) {

               var url = response.data.data.schoolApiUrl;

               axios.post(`http://167.71.34.237:8080/api/createNotice`, {

                "expiresAt": "2020-09-10T16:06:23.559Z",
                "noticeMessage": noticeMessage,
                "noticeTargetAudience": audience,
                "noticeTitle": title,
                "url": url

               }, axiosConfig)
               .then(response => {

                if (response.data.code === 200) {
                    noticeCreatedSuccessfully(dispatch, response.data.data);
                }
                else {
                    noticeCreatedSuccessfully(dispatch, response.data.message);
                }

               }).catch(error => {

                alert(error);

               })
              }
            })
            .catch(error => {
            
                alert(error);
            });
    }

}

const noticeCreatedSuccessfully = (dispatch, message ) => {

    dispatch ({
        type: CREATINGNOTICESUCCESS,
        payload: message
    });  

}

const noticeNotCreatedSuccessfully = (dispatch, message ) => {

    dispatch ({
        type: CREATINGNOTICEFAIL,
        payload: message
    });  

}