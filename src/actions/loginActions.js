import {LOGGINGIN,LOGINFAIL, LOGINSUCCESS} from './types';
import axios from 'axios';



export const logIn = (username, password) => {
  
    

    return (dispatch) => {

        dispatch ({
            type: LOGGINGIN
        })

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
          };
          
        

        axios.post('http://167.71.34.237:8080/admin/login',
                    {
                        "password": password,
                        "username": username
                    },
             
                    axiosConfig
                   
              ).then (response => {

                alert(response)

                console.log(response.data)
                
                if (response.data.code == 200) {
                    userSignedInSuccessfuly(dispatch, response.data.data);
                    
                }else {
                    userFailedToSignIn(dispatch, response.data.message);
                }

              })
              .catch (error => {

                console.log(error)
           
                alert(error)
             
                userFailedToSignIn(dispatch);
              });

       
    }
}


        const userSignedInSuccessfuly = (dispatch, token) => {

            
            dispatch ({
                type: LOGINSUCCESS,
                payload: token
            });     
        };


        const userFailedToSignIn = (dispatch, message) => {

            
            dispatch ({
                type: LOGINFAIL,
                payload: message
            });     
        };
        
       

