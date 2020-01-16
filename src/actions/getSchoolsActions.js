import {GETTINGALLSCHOOLS, CONFIGUREFAIL, CONFIGURESUCCESS,CONFIGURINGSCHOOL, GETTINGALLSCHOOLSSUCCESS, LOGGINGIN, LOGINSUCCESS, LOGINFAIL} from './types';
import {MDBNavLink, MDBBtn} from 'mdbreact';
import React from 'react';
import axios from 'axios';

export const getAllSchools = (token) => {

    return (dispatch) => {

        dispatch ({
            type: GETTINGALLSCHOOLS
        })

        let axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
          };

        axios.get('http://167.71.34.237:8080/schools', axiosConfig)
            .then(response=> {

                console.log(response);
                
                if (response.data.code == 200) {

                    var schools = response.data.data;

                    let schoolRows = [];
                    let schoolOptions = [];
                        
                        schools.forEach((element) => {
                            var b = {name : element.schoolName , 
                                email : element.schoolEmail, 
                                code: element.schoolCode , 
                                county: element.schoolCounty,
                                action:  <MDBNavLink to = {{pathname: '/specific', 
                                                            schoolName : `${element.schoolName}` ,
                                                            schoolCode: `${element.schoolCode}`,
                                                            schoolContactPersonName: `${element.schoolContactPersonPhone}`,
                                                            schoolContactPersonPhone: `${element.schoolContactPersonPhone}`,
                                                            schoolCounty: `${element.schoolCounty}`,
                                                            schoolEmail: `${element.schoolEmail}`,
                                                            schoolApiUrl: `${element.schoolApiUrl}`,
                                                            schoolFilesApiUrl: `${element.schoolFilesApiUrl}`,
                                                            schoolMarketerPhone: `${element.schoolMarketerPhone}`,
                                                            schoolPassword: `${element.schoolPassword}`,
                                                            schoolPopulation: `${element.schoolPopulation}`,
                                                            schoolPrincipalName: `${element.schoolPrincipalName}`,
                                                            schoolPrincipalPhone: `${element.schoolPrincipalPhone}`,
                                                            schoolStatus: `${element.schoolStatus}`

                                                        }} > <MDBBtn gradient = "spring-warmth"  size = "sm">More</MDBBtn></MDBNavLink> 
                            };

                            var c = {
                                label : element.schoolName,
                                value : element.schoolCode
                            }
                            schoolOptions.push(c);
                            schoolRows.push(b);
                        });
                  
                    allSchoolsFoundSuccessfuly(dispatch, schools, schoolRows, schoolOptions);

                }else {
                    alert("not Found");
                }
               
                
            })
            .catch(error => {

               alert(error);
              });
       
    };
};

export const configureSchool = (schoolCode, filesApiUrl, mainApiUrl, token, file) => {


    return (dispatch) => {

        dispatch ({
            type: CONFIGURINGSCHOOL
        })

        let axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
          };

          var formData = new FormData();
          formData.append("file", file);
          formData.append("filesApiUrl", filesApiUrl);
          formData.append("mainApiUrl", mainApiUrl);

        axios.put(`http://167.71.34.237:8080/schoolConfigure/${schoolCode}`, formData, axiosConfig)
        .then(response => {

            console.log(response);

            if (response.data.code === 200) {
                schoolConfigureSuccess(dispatch);
            }else {
                schoolConfigureFail(dispatch, response.data.message);
            }

        })
        .catch(error => {
            
            schoolConfigureFail(dispatch, error.response.data.message);
        })

    }


}



const allSchoolsFoundSuccessfuly = (dispatch, schools, schoolRows, schoolOptions) => {

    
    dispatch ({
        type: GETTINGALLSCHOOLSSUCCESS,
        payload: schools,
        secondPayload: schoolRows,
        thirdPayload: schoolOptions
    });     
};

const schoolConfigureSuccess = (dispatch) => {

    
    dispatch ({
        type: CONFIGURESUCCESS,
      
    });     
};

const schoolConfigureFail = (dispatch, message) => {

    
    dispatch ({
        type: CONFIGUREFAIL,
        payload: message
      
    });     
};


export const configureSchoolLogin = (username, password) => {


    return (dispatch) => {

        dispatch ({
            type: LOGGINGIN
        })

        axios.put(`http://167.71.34.237:8080/admin/login`, {

            "username": username,
            "password": password

        })
        .then(response => {

            console.log(response);

            if (response.data.code === 200) {
                userSignedInSuccessfuly(dispatch, response.data.data);
            }
            else {
                userFailedToSignIn(dispatch, response.data.message);
            }

        })
        .catch(error => {
            alert(error);
        })

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
       
