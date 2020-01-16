
import React, {Component}from "react";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,  } from 'mdbreact';
import Files from 'react-files';
import {connect} from 'react-redux';

class configureForm extends Component {
  
  
  constructor (props) {
    super(props);

    this.handleInputs = this.handleInputs.bind(this);
    this.configureButtonClick = this.configureButtonClick.bind(this);
    this.onFilesChange = this.onFilesChange.bind(this)
  }


  handleInputs (event) {
    this.props.handleTypeEvents(event);
  }

  configureButtonClick () {
    this.props.submitForConfigure();

  }

  onFilesChange (files) {
   this.props.setFile(files)
  }
 
  onFilesError (error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  }

  fileNameOrNot() {
    if (this.props.file) {
      return (
        this.props.file.name
      );
    }
  }

  showErrorMessage() {
    if (this.props.configureSchoolMessage != '') {

        return(
            this.props.configureSchoolMessage
        );

    }
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
                    label="Api url"
                    icon="envelope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value= {this.props.schoolApiUrl}
                    id = "schoolApiUrl"
                    onInput = {this.handleInputs}
                  />
                  <MDBInput
                    label="Files url"
                    icon="envelope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value = {this.props.schoolFilesApiUrl}
                    id = "schoolFilesApiUrl"
                    onInput = {this.handleInputs}
                  />

                </div>
              </form>
              </MDBCol>


              </MDBRow>

              <MDBRow center>
                <div className="files">
                  <Files
                    className='files-dropzone'
                    onChange={this.onFilesChange}
                    onError={this.onFilesError}
                    accepts={['image/*', '.pdf', 'audio/*']}
                    multiple
                    maxFiles={3}
                    maxFileSize={10000000}
                    minFileSize={0}
                    clickable
                  >
                    Drop files here or click to upload
                  </Files>
                </div>
              </MDBRow>

                

              <MDBRow center>
                {this.fileNameOrNot()}
              </MDBRow>
              <MDBRow center>
                {this.showErrorMessage()}
              </MDBRow>
              <div className="text-right py-4 mt-3">
                  <MDBBtn gradient="aqua" type="submit" onClick = {this.configureButtonClick}>
                    CONFIGURE
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

export default connect(mapStateToProps, {}) (configureForm);
