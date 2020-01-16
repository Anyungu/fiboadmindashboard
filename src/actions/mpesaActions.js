import React from 'react';
import axios from 'axios';
import {GETTINGMPESA, GETTINGMPESASUCCESS} from './types';


export const getAllMpesa = (token) => {



    return (dispatch) => {


        dispatch ({
            type: GETTINGMPESA
        })

        let axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
          };

        axios.get('http://167.71.34.237:8080/transactions', axiosConfig)
            .then(response => {

                if (response.data.code === 200) {

                    var mpesa = response.data.data;
                    let mpesaRows = [];


                    var cashSum = 0;

                  

                    mpesa.forEach(element => {

                   
                    
                        var b = {
                            adm: element.studentAdm,
                            ref: element.mpesaReceiptNumber,
                            phone: element.phoneNumber,
                            purpose: element.paymentPurpose,
                            person: element.paymentPerson,
                            amount: element.receivedAmount,
                            status: element.mpesaResultDescription,
                            code: element.schoolCode,
                          
                        }

                        mpesaRows.push(b)
                      
                        cashSum = cashSum + element.receivedAmount;
                       
                        
                    });

                    mpesaRecordsFound(dispatch, mpesaRows, cashSum);

                }

            })
            .catch(error => {

            })

    }


   

}


const mpesaRecordsFound = (dispatch, mpesaRows, cashSum) => {

    dispatch ({
        type: GETTINGMPESASUCCESS,
        payload: mpesaRows,
        payloadSum: cashSum
    });  

}

