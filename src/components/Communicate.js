import React, {Component} from 'react';
import {MDBContainer, 
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBCard
} from "mdbreact";
import NavBar from './reusable/NavBar';
import DropDownSelect from './reusable/DropDownSelect';
import DataTable from './reusable/DataTable';
import {connect} from 'react-redux';
import Button from './reusable/Button';
import {createSchoolNotice} from '../actions';


class Communicate extends Component {

    constructor(props) {
        super(props);
        this.handleViewContainerStateChange = this.handleViewContainerStateChange.bind(this);
        this.handleActivateContainerStateChange = this.handleActivateContainerStateChange.bind(this);
        this.onSelectSchool = this.onSelectSchool.bind(this);
        this.onSelectAudience = this.onSelectAudience.bind(this);
        
    
    }

    state = {
        showViewContainer: false,
        showActivateContainer: false,
        options: [
          {
            label: "Teachers",
            value: "teacher"
          },
          {
            label: "Parents",
            value: "parent"
          },

          {
            label: "Both",
            value: "both"
          },
       
        ],
      
        titleIn: '',
        messageIn: '',
        selectedAudience: '',
        selectedSchoolCode: ''
       
     
      };

      handleTypeEvents = (event) => {

        this.setState({
            [event.target.id]: event.target.value
        })

    }

    onSelectSchool (selected) {

      
        this.setState({
            selectedSchoolCode: selected.value
        })

     
    }

    onSelectAudience (selected) {

      

        this.setState({
            selectedAudience: selected.value
        })

       
    }

    submitForConfigure = () => {

        alert(this.state.selectedSchoolCode);
        alert(this.state.messageIn);
        alert(this.state.selectedAudience);
        alert(this.state.titleIn);
        alert(this.props.token)

        this.props.createSchoolNotice(this.state.selectedSchoolCode, this.state.messageIn, this.state.selectedAudience,  this.state.titleIn, this.props.token);

    }

      handleViewContainerStateChange() {
        if (this.state.showActivateContainer) {

            this.setState({
                showActivateContainer: !this.state.showActivateContainer
            })

        }
        this.setState({
            showViewContainer: !this.state.showViewContainer
        })
    }

    handleActivateContainerStateChange() {
        if (this.state.showViewContainer) {

            this.setState({
                showViewContainer: !this.state.showViewContainer
            })

        }
        this.setState({
            showActivateContainer : !this.state.showActivateContainer
        })
    }


    refreshClick() {

    }

    viewOrActivate () {

        if (this.state.showActivateContainer) {
        return (

             <MDBContainer>
                
                
                  <MDBRow className = "mt-5 mb-5" center>

                    <MDBCol sm = "6">

                       <DropDownSelect
                            options = {this.props.schoolOptions}
                            placeholder = "Select Schools"
                            onSelect = {this.onSelectSchool}
                        />
                        
                  
                    </MDBCol>

                
                </MDBRow>

                 <MDBRow className = "mt-5 mb-5" around>

                    <MDBCol sm = "6">
                        <DropDownSelect
                            options = {this.state.options}
                            placeholder = "Target Audience"
                            onSelect = {this.onSelectAudience}
                        />
                      
                    </MDBCol>
                </MDBRow>

                <MDBRow center>
                    <MDBCol sm = "8">
                        <MDBInput id = "titleIn" type="textarea" label="Type Title Here..." outline rows="1" onInput = {this.handleTypeEvents}/>
                    </MDBCol>
                </MDBRow>

                <MDBRow center>
                    <MDBCol sm = "8">
                        <MDBInput id = "messageIn" type="textarea" label="Type Body Here..." outline rows="5" onInput = {this.handleTypeEvents}/>
                    </MDBCol>
                </MDBRow>


                <MDBRow center>
                 
                    <MDBBtn outline gradient="purple"
                    onClick = {this.submitForConfigure}
                    >
                        
                            Send <MDBIcon far icon="paper-plane" className="ml-1" />
                        
                    </MDBBtn>
              
                </MDBRow>

            </MDBContainer>

            );
        }


        if (this.state.showViewContainer) {

            const {counterFontSize} = styles;

            return(
            <MDBContainer>

             <MDBRow className = "mt-5 mb-5" center>
                <MDBCol sm = "6">
                <DropDownSelect
                  options = {this.props.schoolOptions}
                  placeholder = "Select school to view parents..."
                  onSelect = {this.onSelect}
                 
                />
                </MDBCol>
            </MDBRow>

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
                            <p style = {counterFontSize} > {this.props.parentRows.length} </p>
                        </MDBCol>
                    
                </MDBRow>
            

                <MDBRow center>
                    <MDBCol sm = "3">
                       <p style = {counterFontSize}> Paid : </p>
                    </MDBCol>

                    <MDBCol sm = "3">
                        <p style = {counterFontSize} > 292 </p>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            </MDBCol>
            </MDBRow>

           

            <MDBRow center>
               
                    <DataTable columns = {this.state.columns} rows = {this.props.parentRows}/>
                
            </MDBRow>
           
        </MDBContainer>
            );

        }
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

                <MDBRow className = "mt-5 mb-5" around>
                <MDBCol sm = "3">
                    <Button handleFormStateChange = {this.handleActivateContainerStateChange} gradient = "peach" icon = "plus-square" text = "NEW" size = "6x"/>
                </MDBCol>

                    <MDBCol sm = "3">
                    <Button handleFormStateChange = {this.handleViewContainerStateChange} gradient = "purple" icon = "eye" text = "VIEW" size = "6x"/>
                </MDBCol>
                
                </MDBRow>
                {this.viewOrActivate()}
            </MDBContainer>
           
            
        );
    }
}

const styles = {
    counterFontSize: {
        fontWeight: 'bold',
        fontSize: 40
    },
   
}

const mapStateToProps = ({loginReducer, getSchoolsReducer, parentReducer, noticeReducer}) => {
    const {name, password, token} = loginReducer;

    const {schools, schoolOptions} = getSchoolsReducer;

    const {parentRows} = parentReducer;

    const {message} = noticeReducer;

    return {name, password, token, schools, parentRows, schoolOptions, message};
}

export default connect(mapStateToProps,{createSchoolNotice})(Communicate);