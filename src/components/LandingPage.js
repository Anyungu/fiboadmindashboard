import React, {Component} from 'react';
import {MDBContainer, 
    MDBRow,

} from 'mdbreact';


import LoginForm from './reusable/LoginForm';
import {connect} from 'react-redux';
import {logIn} from '../actions';


class LandingPage extends Component {

    constructor (props) {
        super(props);

     
       
        this.handleTypeEvents = this.handleTypeEvents.bind(this);
        this.submitForConfigure = this.submitForConfigure.bind(this);
        
    }

    state = {
       username:'',
       password: ''
    }

    handleTypeEvents = (event) => {

        this.setState({
            [event.target.id]: event.target.value
        })

    }

    submitForConfigure = () => {

        this.props.logIn(this.state.username, this.state.password);

    }

    showOrHideErrorMessage() {

        if (this.props.errorMessage != '') {

            return (

                <MDBRow>
                    <p>
                        {this.props.errorMessage}
                    </p>
                </MDBRow>

            );

        }
        
    }


    loginSuccess() {

        if (this.props.token != '') {

            this.props.history.push("/dashboard");

        }

    }

   

    

    



    render () {

        const {counterFontSize} = styles;
        return (

            <MDBContainer className = "pt-5">

                {this.loginSuccess()}
                

                <MDBRow center>
                   <LoginForm
                        username = {this.state.username}
                        password = {this.state.password}
                        handleTypeEvents = {this.handleTypeEvents}
                        submitForConfigure = {this.submitForConfigure}
                   
                   />
                </MDBRow>

                {this.showOrHideErrorMessage()}
                   
                

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
    const {name, password, token, errorMessage} = loginReducer;

    const {schools, schoolRows, configureSchoolLoading} = getSchoolsReducer;

    return {name, password, token, schools, schoolRows, configureSchoolLoading, errorMessage};
}

export default connect(mapStateToProps, {logIn}) (LandingPage);

