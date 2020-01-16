
import React, {Component}from "react";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,  } from 'mdbreact';
import {connect} from 'react-redux';
import DropDownSelect from './DropDownSelect';

class NodeDeviceForm extends Component {
  
  
  constructor (props) {
    super(props);

    this.handleInputs = this.handleInputs.bind(this);
    this.configureButtonClick = this.configureButtonClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  state = {
    options: [
        {
          label: "Node Device",
          value: 1
        },
        {
          label: "Server Device",
          value: 2
        },
     
      ],
      showNodeForm: false,
      showServerForm: false
  }


  handleInputs (event) {
    this.props.handleTypeEvents(event);
  }

  configureButtonClick () {
    // this.props.submitForConfigure();

  }

  onSelect(selected) {
      if (selected.value === 1) {

        if (this.state.showServerForm) {

            this.setState({
                showServerForm: !this.state.showServerForm
            })

        }

        this.setState({
            showNodeForm: !this.state.showNodeForm
        })

      }

      if (selected.value === 2) {

        if (this.state.showNodeForm) {

            this.setState({
                showNodeForm: !this.state.showNodeForm
            })

        }

        this.setState({
            showServerForm: !this.state.showServerForm
        })

    }
  }


  nodeOrServerForm() {
      if (this.state.showNodeForm) {

        return (
            <MDBRow center>
            <MDBCol md="10">
            <MDBCard>
                
                <MDBCardBody>
                    <MDBRow>
                    <MDBCol md="10">
                <form>
                    <div className="grey-text">
                    <MDBInput
                        label="Designation"
                        icon="dollar-sign"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value= {this.props.designation}
                        id = "nodeDesignation"
                        onInput = {this.handleInputs}
                    />
                    <MDBInput
                        label="Phone Number"
                        icon="dollar-sign"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value = {this.props.phone}
                        id = "nodePhone"
                        onInput = {this.handleInputs}
                    />

                    <MDBInput
                        label="UID"
                        icon="dollar-sign"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value = {this.props.uid}
                        id = "nodeUID"
                        onInput = {this.handleInputs}
                    />

                    <MDBInput
                        label="Code"
                        icon="dollar-sign"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value = {this.props.schoolCode}
                        id = "schoolCode"
                        onInput = {this.handleInputs}
                    />

                    <MDBInput
                        label="Server Phone"
                        icon="dollar-sign"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value = {this.props.nodeServerPhone}
                        id = "nodeServerPhone"
                        onInput = {this.handleInputs}
                    />

                    </div>
                </form>
                </MDBCol>


                </MDBRow>

                
                    
                <div className="text-right py-4 mt-3">
                    <MDBBtn gradient="aqua" type="submit" onClick = {this.configureButtonClick}>
                        UPDATE
                    </MDBBtn>
                    </div>
                </MDBCardBody>
            
            </MDBCard>
            
            </MDBCol>

            
        </MDBRow>
        );

      }

      if (this.state.showServerForm) {

        return (
            <MDBRow center>
            <MDBCol md="10">
            <MDBCard>
                
                <MDBCardBody>
                    <MDBRow>
                    <MDBCol md="10">
                <form>
                    <div className="grey-text">
                   
                    <MDBInput
                        label="Phone Number"
                        icon="dollar-sign"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value = {this.props.serverPhone}
                        id = "serverPhone"
                        onInput = {this.handleInputs}
                    />

                    <MDBInput
                        label="UID"
                        icon="dollar-sign"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value = {this.props.serverUid}
                        id = "serverUID"
                        onInput = {this.handleInputs}
                    />

                    

                    <MDBInput
                        label="Type"
                        icon="dollar-sign"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value = {this.props.serverType}
                        id = "serverType"
                        onInput = {this.handleInputs}
                    />

                    </div>
                </form>
                </MDBCol>


                </MDBRow>

                
                    
                <div className="text-right py-4 mt-3">
                    <MDBBtn gradient="aqua" type="submit" onClick = {this.configureButtonClick}>
                        UPDATE
                    </MDBBtn>
                    </div>
                </MDBCardBody>
            
            </MDBCard>
            
            </MDBCol>

            
        </MDBRow>
        );

      }
  }





    render () {

            return (
            <MDBContainer>

                <MDBRow className = "mt-5 mb-5" center>

           
                        <MDBCol sm = "6">
                            <DropDownSelect
                            options = {this.state.options}
                            placeholder = "Select the device type..."
                            onSelect = {this.onSelect}
                            
                            />
                        </MDBCol>
                </MDBRow>

                {this.nodeOrServerForm()}


            </MDBContainer>
            );
    }
}


const mapStateToProps = ({loginReducer, getSchoolsReducer}) => {
  const {name, password, token} = loginReducer;

  const {schools, schoolRows, configureSchoolLoading, configureSchoolMessage} = getSchoolsReducer;

  return {name, password, token, schools, schoolRows, configureSchoolLoading, configureSchoolMessage};
}

export default connect(mapStateToProps, {}) (NodeDeviceForm);
