
import React, {Component}from "react";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class configureForm extends Component {
  
  
  constructor (props) {
    super(props);

    this.handleInputs = this.handleInputs.bind(this);
    this.configureButtonClick = this.configureButtonClick.bind(this);
  }



  handleInputs (event) {
    this.props.handleTypeEvents(event);
  }

  configureButtonClick () {
    this.props.submitForConfigure();

  }

    render () {

        return (
        <MDBContainer>
      <MDBRow center>
        <MDBCol md="10">
          <MDBCard>
            
            <MDBCardBody>
                <MDBRow>
                <MDBCol md="10">
              <form>
                {/* <p className="h4 text-center py-4">UPDATE</p> */}
                <div className="grey-text">
                  <MDBInput
                    label="Username"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value= {this.props.username}
                    id = "username"
                    onInput = {this.handleInputs}
                  />
                  <MDBInput
                    label="password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    error="wrong"
                    success="right"
                    value = {this.props.password}
                    id = "password"
                    onInput = {this.handleInputs}
                  />

                </div>
              </form>
              </MDBCol>


              </MDBRow>
              <div className="text-right py-4 mt-3">
                  <MDBBtn gradient="aqua" type="submit" onClick = {this.configureButtonClick}>
                    LOGIN
                  </MDBBtn>
                </div>
            </MDBCardBody>
           
          </MDBCard>
          
        </MDBCol>

        
      </MDBRow>
    </MDBContainer>
    );
    }
}

export default configureForm;