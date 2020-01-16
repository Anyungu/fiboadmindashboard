import React, {Component}from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class FormPage extends Component {

render () {


  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="10">
          <MDBCard>
            
            <MDBCardBody>
                <MDBRow>
                <MDBCol md="6">
              <form>
                {/* <p className="h4 text-center py-4">UPDATE</p> */}
                <div className="grey-text">
                  <MDBInput
                    label="School Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value= {this.props.schoolName}
                  />
                  <MDBInput
                    label="School email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value = {this.props.schoolEmail}
                  />
                  <MDBInput
                    label="County"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.props.schoolCounty}
                  />
                  <MDBInput
                    label="Population"
                    icon="lock"
                    group
            
                    validate
                    value={this.props.schoolPopulation}

                  />
                </div>
              </form>
              </MDBCol>

              <MDBCol md="6">
              <form>
                {/* <p className="h4 text-center py-4">UPDATE</p> */}
                <div className="grey-text">
                  <MDBInput
                    label="Principal"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value = {this.props.schoolPrincipalName}
                  />
                  <MDBInput
                    label="Principal Contact"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value = {this.props.schoolPrincipalPhone}
                  />
                  <MDBInput
                    label="Contact Person"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value ={this.props.schoolContactPersonName}
                  />
                  <MDBInput
                    label="Contact Person Phone"
                    icon="lock"
                    group
                    validate
                    value ={this.props.schoolContactPersonPhone}
                  />
                </div>
                
              </form>
              </MDBCol>
              </MDBRow>
              <div className="text-right py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
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
};

export default FormPage;