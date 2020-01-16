
import {GETTINGALLDEVICES, GETTINGALLDEVICESSUCCESS} from './types';
import axios from 'axios';
import React from 'react';
import {MDBBtn} from 'mdbreact';

export const getAllDevices = (token, schoolCode, activateOrNottext) => {

    return (dispatch) => {

        dispatch ({
            type: GETTINGALLDEVICES
        })

        let axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
          };

        axios.get(`http://167.71.34.237:8080/devices?schoolCode=${schoolCode}`, axiosConfig)
            .then(response=> {
                if (response.data.code == 200) {

                    var devices = response.data.data;

                    let deviceRows = [];
   
                  
            
                    devices.forEach((element) => {

                        let text;
                        let activateOrNottext;
                         if (element.deviceStatus == true) {
     
                             text = "Active"
                             activateOrNottext = "Deactivate"
     
                         }
     
                         if (element.deviceStatus == false) {
     
                             text = "Inactive"
                             activateOrNottext = "Activate"
     
                         }
                       
                        var b = {uid : element.deviceUID, 
                            code : element.schoolCode, 
                            status: text, 
                            phone: element.devicePhone,
                            server: element.serverDevicePhone,
                            type: element.deviceType,
                            designation: element.deviceDesignation,
                            action: <MDBBtn gradient = "spring-warmth"  size = "sm">{activateOrNottext}</MDBBtn>,
                        };
                        deviceRows.push(b);
                    });
                    allDevicesFoundSuccessfuly(dispatch, deviceRows);

                }else {
                    alert("not Found");
                }
               
                
            })
            .catch(error => {

               alert(error);
              });
       
    };
};


const allDevicesFoundSuccessfuly = (dispatch, deviceRows) => {

    
    dispatch ({
        type: GETTINGALLDEVICESSUCCESS,
        payload: deviceRows
    });     
};
        
       
