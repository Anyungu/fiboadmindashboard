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
import {getAllDevices} from '../actions';
import DropDownSelect from './reusable/DropDownSelect';
import Button from './reusable/Button';
import NodeDeviceForm from './reusable/NodeDeviceForm'


class Devices extends Component {

    constructor (props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.refreshClick = this.refreshClick.bind(this);
        this.handleNew = this.handleNew.bind(this);
        this.handleView = this.handleView.bind(this);
    
    }

    state = {
       
        columns: [
            {
              label: 'Device UID',
              field: 'uid',
         
      
            },
            {
              label: 'School Code',
              field: 'code',
          
            },
            {
              label: 'Device Status',
              field: 'status',

            },



              {
                label: 'Phone',
                field: 'phone',
  
              },

              {
                label: 'Server Phone',
                field: 'server',
   
              },

              {
                label: 'Type',
                field: 'type',
      
              },
              {
                label: 'Device Designation',
                field: 'designation',
    
              },
              {
                label: '',
                field: 'action',
                sort: 'asc',
                width: 200
              },
           
          ],

          selectedSchoolCode: '',
          showNew: false,
          showView: false

      };

      showDatatable() {
        if(this.props.deviceRows.length > 0) {
      return  <DataTable columns = {this.state.columns} rows = {this.props.deviceRows}/>
        }
    }

    refreshClick() {
        
        this.props.getAllDevices(this.props.token, this.state.selectedSchoolCode);
    }

    loginFail() {

        if (this.props.token === '') {

            this.props.history.push("/");

        }

    }

    showEverythingOrNot() {

        if(this.props.deviceRows.length > 0) {
            const {counterFontSize} = styles;

        return (

            <MDBRow center>
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
                            <p style = {counterFontSize} > {this.props.deviceRows.length} </p>
                        </MDBCol>
                    
                </MDBRow>
            

                <MDBRow center>
                    <MDBCol sm = "3">
                       <p style = {counterFontSize}> Inactive : </p>
                    </MDBCol>

                    <MDBCol sm = "3">
                        <p style = {counterFontSize} > 292 </p>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            </MDBCol>

            <MDBRow className = "mt-5 mb-5" center>
               
               {this.showDatatable()}
                
            </MDBRow>
            </MDBRow>

        );
        }
        
    }

    onSelect (selected) {

        this.setState({
            selectedSchoolCode: selected.value
        })

        this.props.getAllDevices(this.props.token, selected.value);
    }

    
    handleNew () {

        if (this.state.showView) {
            this.setState({
                showView: !this.state.showView
            })
        }

        this.setState({
            showNew: !this.state.showNew
        })

    }

    handleView () {

        if (this.state.showNew) {
            this.setState({
                showNew: !this.state.showNew
            })
        }

        this.setState({
            showView: !this.state.showView
        })

    }

    newOrView() {

        if (this.state.showNew) {
            return(
                <NodeDeviceForm/>
            );
        }

        if (this.state.showView) {
            return(
            <div>
                 <MDBRow className = "mt-5 mb-5" center>

           
                    <MDBCol sm = "6">
                        <DropDownSelect
                        options = {this.props.schoolOptions}
                        placeholder = "Select school to view devices..."
                        onSelect = {this.onSelect}
                        
                        />
                    </MDBCol>
                </MDBRow>

                {this.showEverythingOrNot()}

            </div>
            );
        }

    }


    
    render () {
       
        return (
            <MDBContainer className = "pt-5">
            {this.loginFail()}
            <NavBar/>

                <MDBRow className = "mt-5 mb-5" around>
                    <MDBCol sm = "3">
                        <Button handleFormStateChange = {this.handleNew} gradient = "peach" icon = "plus-square" text = "NEW" size = "6x"/>
                    </MDBCol>

                    <MDBCol sm = "3">
                    <Button handleFormStateChange = {this.handleView} gradient = "purple" icon = "eye" text = "VIEW" size = "6x"/>
                    </MDBCol>
                
                </MDBRow>
           

        
                {this.newOrView()}


           
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

const mapStateToProps = ({loginReducer, devicesReducer, getSchoolsReducer}) => {
    const {name, password, token} = loginReducer;


    const {deviceRows} = devicesReducer;

    const { schoolOptions} = getSchoolsReducer;

    return {name, password, deviceRows, token, schoolOptions};
}

export default connect(mapStateToProps, {getAllDevices}) (Devices);
