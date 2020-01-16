
import {GETTINGALLPARENTS, GETTINGALLPARENTSSUCCESS} from './types';
import axios from 'axios';
import React from 'react';
import {MDBBtn} from 'mdbreact';


export const getAllSchoolParents = (schoolCode, token) => {

    var url;

    return (dispatch) => {

        dispatch ({
            type: GETTINGALLPARENTS
        })

        let axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
          };

        
       

        axios.get(`http://167.71.34.237:8080/schools/${schoolCode}`, axiosConfig)
             .then (response => {
                 if (response.data.code === 200) {

                    
                     url = response.data.data.schoolApiUrl;

                     axios.get(`http://167.71.34.237:8080/api/parents?url=${url}`, axiosConfig)
                    .then(response=> {
                        if (response.data.code == 200) {
            
                            var parents = response.data.data;

                            console.log(response);
            
                            let parentRows = [];
            
                           
                           
                          
                    
                            parents.forEach((element) => {

                                let text;
                                let activateOrNottext;

                                if (element.accountState == null) {

                                    text = "Trial"
                                    activateOrNottext = "Activate"

                                }

                                if (element.accountState == true) {

                                    text = "Active"
                                    activateOrNottext = "Deactivate"

                                }

                                if (element.accountState == false) {

                                    text = "Inactive"
                                    activateOrNottext = "Activate"

                                }
                                
                                var b = {adm : element.studentAdminNo, 
                                    phone : element.mobilePhone, 
                                    status:text, 
                                    login: element.firstLoginDate,
                                    actionOne: <MDBBtn gradient = "spring-warmth"  size = "sm">{activateOrNottext}</MDBBtn>,
                                    actionTwo: <MDBBtn gradient = "aqua" onClick = {() => sendParentPin(schoolCode, element.studentAdminNo, token)} size = "sm">Send Pin</MDBBtn>,
                                    };
                                    
                                parentRows.push(b);
                            });
                            allParentsFoundSuccessfuly(dispatch, parents, parentRows);
            
                        }else {
                            alert("not Found");
                        }
                       
                        
                    })
                    .catch(error => {
            
                       alert(error);
                      });
                 }
             }).catch(error => {
            
                alert(error);
                console.log(error)
               });

      


    };

};



const sendParentPin = (schoolCode, adm, token) => {

    alert(schoolCode);
    alert(adm);
    alert(token);

    // return (dispatch) => {

    //     dispatch ({
    //         type: GETTINGALLPARENTS
    //     })

        alert("holah");

        let axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
          };


         

          console.log(axiosConfig);

         


        axios.get(`http://167.71.34.237:8080/schools/${schoolCode}`, axiosConfig)
            .then(response => {

                
                console.log(response);



                if (response.data.code == 200) {

                  

                    var url = response.data.data.schoolApiUrl;

                    alert(url);

                    let axiosConfigSecond = {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'multipart/form-data'
                        }
                      };


                    var formData = new FormData();
                    formData.append("adm", adm);
                    formData.append("url", url);

                    axios.post(`http://167.71.34.237:8080/api/sendParentPin`, formData, axiosConfigSecond)
                        .then(response => {

                            console.log(1)

                            console.log(response)

                            if (response.data.code === 200) {
                                console.log(response.data);
                            }

                        })
                        .catch(error => {

                            console.log(2)
                            console.log(error)


                        })

                }

               

            })
            .catch(error => {

                console.log(3)
               
                console.log(error)

            })

           

    
    // }


}

const allParentsFoundSuccessfuly = (dispatch, parents, parentRows) => {

    
    dispatch ({
        type: GETTINGALLPARENTSSUCCESS,
        payload: parentRows
    });     
};
       