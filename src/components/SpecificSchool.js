import React, {Component} from 'react';
import {MDBContainer, 
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdbreact';
import Button from './reusable/Button';
import NavBar from './reusable/NavBar';
import Linebreak from './reusable/LineBreak';
import OpenForm from './reusable/OpenForm';
import PricePackageForm from './reusable/PricePackageForm';
import ConfigureForm from './reusable/ConfigureForm';
import {connect} from 'react-redux';
import {configureSchool} from '../actions';


class SpecificSchool extends Component {

    constructor (props) {
        super(props);

        this.myRef = React.createRef();

        this.handleFormStateChange = this.handleFormStateChange.bind(this);
        this.showOrHideForm = this.showOrHideForm.bind(this);
        this.handleConfigureFormStateChange = this.handleConfigureFormStateChange.bind(this);
        this.blockedOrActive = this.blockedOrActive.bind(this);
        this.handleTypeEvents = this.handleTypeEvents.bind(this);
        this.submitForConfigure = this.submitForConfigure.bind(this);
        this.setFile = this.setFile.bind(this);
        this.handlePricePackageForm = this.handlePricePackageForm.bind(this);
        this.scrollOrNot = this.scrollOrNot.bind(this);
    }

    state = {
        showForm: false,
        showConfigureForm: false,
        showPricePackageForm: false,
        schoolName: this.props.location.schoolName,
        schoolCode : this.props.location.schoolCode,
        schoolContactPersonName : this.props.location.schoolContactPersonName,
        schoolContactPersonPhone : this.props.location.schoolContactPersonPhone,
        schoolCounty : this.props.location.schoolCounty,
        schoolEmail : this.props.location.schoolEmail,
        schoolApiUrl : this.props.location.schoolApiUrl,
        schoolFilesApiUrl : this.props.location.schoolFilesApiUrl,
        schoolMarketerPhone : this.props.location.schoolMarketerPhone,
        schoolPassword : this.props.location.schoolPassword,
        schoolPopulation : this.props.location.schoolPopulation,
        schoolPrincipalName : this.props.location.schoolPrincipalName,
        schoolPrincipalPhone : this.props.location.schoolPrincipalPhone,
        file: [],
        schoolStatus: this.props.location.schoolStatus,
        monthsFour: '',
        monthsTwelve: '',
        monthsFortyEight: ''
    }


    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);  
    
    scrollOrNot() {
        if (this.state.showConfigureForm || this.state.showPricePackageForm || this.state.showForm) {

            this.scrollToMyRef();

        }
    }

    handleTypeEvents = (event) => {

        this.setState({
            [event.target.id]: event.target.value
        })

    }

    setFile(files) {
        this.setState({
            file: files
        })
    }

    submitForConfigure = () => {

        this.props.configureSchool(this.state.schoolCode, this.state.schoolFilesApiUrl, this.state.schoolApiUrl, this.props.token, this.state.file[0]);

    }

    

    showOrHideForm() {
        if (this.state.showForm) {

              
            
            return <OpenForm 

                schoolName = {this.state.schoolName}
                schoolCode = {this.state.schoolCode}
                schoolContactPersonName = {this.state.schoolContactPersonName}
                schoolContactPersonPhone = {this.state.schoolContactPersonPhone}
                schoolCounty = {this.state.schoolCounty}
                schoolEmail = {this.state.schoolEmail}
                schoolApiUrl = {this.state.schoolApiUrl}
                schoolFilesApiUrl = {this.state.schoolFilesApiUrl}
                schoolMarketerPhone = {this.state.schoolMarketerPhone}
                schoolPassword = {this.state.schoolPassword}
                schoolPopulation = {this.state.schoolPopulation}
                schoolPrincipalName = {this.state.schoolPrincipalName}
                schoolPrincipalPhone = {this.state.schoolPrincipalPhone}
           
            />
        }

        if (this.state.showPricePackageForm) {

         
            
            return <PricePackageForm

                monthsFortyEight = {this.state.monthsFortyEight}
                monthsFour = {this.state.monthsFour}
                monthsTwelve = {this.state.monthsTwelve}
                handleTypeEvents = {this.handleTypeEvents}
           
            />
        }

        if (this.state.showConfigureForm && this.props.configureSchoolLoading) {

           
            
                return (

                    <MDBRow center>

                    <MDBIcon icon="cog" color="purple" spin size="3x" fixed />
                        <span className="sr-only">Loading...</span>

                    </MDBRow>

                );
            }

            if (this.state.showConfigureForm && this.props.configureSchoolLoading === false) {

           

            
                return (

                   <ConfigureForm

                    schoolApiUrl = {this.state.schoolApiUrl}
                    schoolFilesApiUrl = {this.state.schoolFilesApiUrl}
                    handleTypeEvents = {this.handleTypeEvents}
                    submitForConfigure = {this.submitForConfigure}
                    setFile = {this.setFile}
                    file = {this.state.file[0]}
                        
                    />

                );
            }


        

        
    }

    handleFormStateChange() {
        if (this.state.showConfigureForm) {

            this.setState({
                showConfigureForm: !this.state.showConfigureForm
            })

        }

        if (this.state.showPricePackageForm) {

            this.setState({
                showPricePackageForm: !this.state.showPricePackageForm
            })

        }
        this.setState({
            showForm : !this.state.showForm
        })
    }

    handleConfigureFormStateChange() {
        if (this.state.showForm) {

            this.setState({
                showForm: !this.state.showForm
            })

        }

        if (this.state.showPricePackageForm) {

            this.setState({
                showPricePackageForm: !this.state.showPricePackageForm
            })

        }
        this.setState({
            showConfigureForm : !this.state.showConfigureForm
        })
    }

    handlePricePackageForm() {

        if (this.state.showForm) {

            this.setState({
                showForm: !this.state.showForm
            })

        }
        if (this.state.showConfigureForm) {

            this.setState({
                showConfigureForm: !this.state.showConfigureForm
            })

        }

        this.setState({
            showPricePackageForm : !this.state.showPricePackageForm
        })

    }

    blockedOrActive() {

        let stat = this.state.schoolStatus;


        if (stat == "null" || stat == "false") {

            return (
                <MDBCol sm = "3">
                    <Button  gradient = "aqua" icon = "play-circle" text = "ACTIVATE" size = "6x"/>
                </MDBCol>

            );

        }

        if (stat == "true") {

            return (

                <MDBCol sm = "3">
                    <Button  gradient = "aqua" icon = "ban" text = "BLOCK" size = "6x"/>
                </MDBCol>
    
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

               
                <MDBRow className = "mt-5" center>
                    <MDBCol sm = "8">
                        <p style = {{...counterFontSize, ...{textAlign:'center'}}}>
                            {this.state.schoolName}
                        </p>
                    </MDBCol>
                </MDBRow>

                <MDBRow className = "mb-5" around>
                    <MDBCol sm = "3">
                        <Button handleFormStateChange = {this.handleConfigureFormStateChange} gradient = "peach" icon = "cog" text = "CONFIGURE" size = "6x"/>
                    </MDBCol>

                     <MDBCol sm = "3">
                        <Button handleFormStateChange = {this.handleFormStateChange} gradient = "purple" icon = "edit" text = "UPDATE" size = "6x"/>
                    </MDBCol>

                      <MDBCol sm = "3">
                        <Button handleFormStateChange = {this.handlePricePackageForm} gradient = "blue" icon = "dollar-sign" text = "PRICING" size = "6x"/>
                    </MDBCol>

                   


                   
                </MDBRow>

                <MDBRow ref={this.myRef} center>
                   {this.showOrHideForm()}
                    {this.scrollOrNot()}
                  
                </MDBRow>

                 <MDBRow className = "mb-5" around>
                    <MDBCol sm = "3">
                        <Button handleFormStateChange = {this.handleConfigureFormStateChange} gradient = "blue" icon = "key" text = "PASSWORD" size = "6x"/>
                    </MDBCol>

                     <MDBCol sm = "3">
                        <Button handleFormStateChange = {this.handleFormStateChange} gradient = "aqua" icon = "camera" text = "PHOTO" size = "6x"/>
                    </MDBCol>

                      
                    {this.blockedOrActive()}


                   
                </MDBRow>

            
                

                <Linebreak color = 'red'/>

                <MDBRow around>
                    <MDBCol sm = "3">
                       <p style = {counterFontSize}> Parents : </p>
                    </MDBCol>

                    <MDBCol sm = "2">
                        <p style = {counterFontSize} > 1000 </p>
                    </MDBCol>

                    <MDBCol sm = "3">
                       <p style = {counterFontSize}> Active : </p>
                    </MDBCol>

                    <MDBCol sm = "2">
                        <p style = {counterFontSize} > 1000 </p>
                    </MDBCol>
                </MDBRow>

                <MDBRow around>
                    <MDBCol sm = "3">
                       <p style = {counterFontSize}> Revenue : </p>
                    </MDBCol>

                    <MDBCol sm = "2">
                        <p style = {counterFontSize} > 1000000 </p>
                    </MDBCol>

                    <MDBCol sm = "3">
                       <p style = {counterFontSize}> sms : </p>
                    </MDBCol>

                    <MDBCol sm = "2">
                        <p style = {counterFontSize} > 1000000 </p>
                    </MDBCol>
                </MDBRow>

                <Linebreak color = 'red'/>


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

const mapStateToProps = ({loginReducer, getSchoolsReducer}) => {
    const {name, password, token} = loginReducer;

    const {schools, schoolRows, configureSchoolLoading, configureSchoolMessage} = getSchoolsReducer;

    return {name, password, token, schools, schoolRows, configureSchoolLoading, configureSchoolMessage};
}

export default connect(mapStateToProps, {configureSchool}) (SpecificSchool);

