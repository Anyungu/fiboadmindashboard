import React, {Component} from 'react';
import {MDBContainer, 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBBtn,
    MDBIcon
} from 'mdbreact';
import NavBar from './reusable/NavBar';
import DataTable from './reusable/DataTable';
import {connect} from 'react-redux';
import {getAllMpesa} from '../actions';

class Mpesa extends Component {

    state = {

        columns: [

            {
                label: 'Adm',
                field: 'adm',
                width: 70
         
            },
            {
              label: 'Ref',
              field: 'ref',
              width: 100
            },
            {
              label: 'Phone ',
              field: 'phone',
              width: 150
     
            },
            {
              label: 'Purpose',
              field: 'purpose',
              width: 150
     
            },

            {
                label: 'Person',
                field: 'person',
                width: 100
      
            },

            {
                label: 'Amount',
                field: 'amount',
                width: 70

              },

              {
                label: 'Status',
                field: 'status',
                width: 250
              },

              {
                label: 'Code',
                field: 'code',
                width: 100
              },

           
           
          ],
      };

        showDatatable() {
            console.log(this.props.mpesaRows)
            if(this.props.mpesaRows.length > 0) {
                return  <DataTable columns = {this.state.columns} rows = {this.props.mpesaRows}/>
            }
        }

      refreshClick() {
        
        this.props.getAllMpesa(this.props.token);
        }

        componentWillMount() {
            this.props.getAllMpesa(this.props.token);
        }


        loginFail() {

            if (this.props.token === '') {
    
                this.props.history.push("/");
    
            }
    
        }


    render () {
        const {counterFontSize} = styles;
        return (
            <MDBContainer className = "pt-5">
                {this.loginFail()}
            <NavBar/>
            <MDBRow className = "mt-5 mb-5" center>
            <MDBCol size = "10">
            <MDBCard >

                <MDBRow end>
                    <MDBBtn floating gradient="purple"  circle onClick = {this.refreshClick.bind(this)}>
                        <MDBIcon  icon = "sync-alt" size = "2x" />
                    </MDBBtn>

                </MDBRow>

                <MDBRow center >

                
                    
                        <MDBCol sm = "3">
                          <p style = {counterFontSize}> Number : </p>
                        </MDBCol>

                        <MDBCol sm = "3">
                            <p style = {counterFontSize} > {this.props.mpesaRows.length} </p>
                        </MDBCol>
                    
                </MDBRow>
            

                <MDBRow center>
                    <MDBCol sm = "3">
                       <p style = {counterFontSize}> Total : </p>
                    </MDBCol>

                    <MDBCol sm = "3">
                        <p style = {counterFontSize} > {this.props.cashSum} </p>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            </MDBCol>
            </MDBRow>


            <MDBRow center>
               
               {this.showDatatable()}
                    
                
            </MDBRow>
           
        </MDBContainer>

        );
    }
}

const styles = {
    counterFontSize: {
        fontWeight: 'bold',
        fontSize: 40
    }
}

const mapStateToProps = ({loginReducer, devicesReducer, mpesaReducer}) => {
    const {name, password, token} = loginReducer;


    const {deviceRows} = devicesReducer;

    const {mpesaRows, cashSum} = mpesaReducer;

    return {name, password, deviceRows, mpesaRows, token, cashSum};
}

export default connect(mapStateToProps, {getAllMpesa}) (Mpesa);

