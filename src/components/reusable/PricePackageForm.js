
import React, {Component}from "react";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,  } from 'mdbreact';
import {connect} from 'react-redux';

class PricePackageForm extends Component {
  
  
  constructor (props) {
    super(props);

    this.handleInputs = this.handleInputs.bind(this);
    this.configureButtonClick = this.configureButtonClick.bind(this);
  }


  handleInputs (event) {
    this.props.handleTypeEvents(event);
  }

  configureButtonClick () {
    // this.props.submitForConfigure();

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
                <div className="grey-text">
                  <MDBInput
                    label="4 Months Package"
                    icon="dollar-sign"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value= {this.props.monthsFour}
                    id = "monthsFour"
                    onInput = {this.handleInputs}
                  />
                  <MDBInput
                    label="12 Months Package"
                    icon="dollar-sign"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value = {this.props.monthsTwelve}
                    id = "monthsTwelve"
                    onInput = {this.handleInputs}
                  />

                   <MDBInput
                    label="48 Months Package"
                    icon="dollar-sign"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value = {this.props.monthsFortyEight}
                    id = "monthsFortyEight"
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
    </MDBContainer>
    );
    }
}


const mapStateToProps = ({loginReducer, getSchoolsReducer}) => {
  const {name, password, token} = loginReducer;

  const {schools, schoolRows, configureSchoolLoading, configureSchoolMessage} = getSchoolsReducer;

  return {name, password, token, schools, schoolRows, configureSchoolLoading, configureSchoolMessage};
}

export default connect(mapStateToProps, {}) (PricePackageForm);
