
import React, {Component} from "react";
import Button from './reusable/Button';
import {MDBContainer, 
    MDBRow, 
    MDBCol
} from 'mdbreact';

import NavBar from './reusable/NavBar';
import {getAllSchools} from '../actions';
import {connect} from 'react-redux';

class Dashboard extends Component {

    componentWillMount () {

        if (this.props.schools !== []) {
            this.props.getAllSchools(this.props.token);
        }

    }

    loginFail() {

        if (this.props.token === '') {

            this.props.history.push("/");

        }

    }
    render() {
        return (
            <MDBContainer>

                {this.loginFail()} 
                <MDBRow>
                    <NavBar/>
                </MDBRow>
                
                <MDBRow className="mb-4" around>
                    <MDBCol sm = "3">
                        <Button gradient = "peach" icon = "graduation-cap" text = "schools" size = "7x" to = "/schools"/>
                    </MDBCol>
                    <MDBCol sm = "3">
                        <Button gradient = "aqua" icon = "hand-holding-usd" text = "revenue" size = "7x" to = "/mpesa"/>
                    </MDBCol>
                    <MDBCol sm = "3">
                        <Button gradient = "blue" icon = "comments" text = "notices" size = "7x" to = "/communicate"/>
                    </MDBCol>
                </MDBRow>

               <MDBRow className="mt-4" around>
                    <MDBCol sm = "3">
                        <Button gradient = "blue" icon = "network-wired" text = "devices" size = "7x" to = "/devices"/>
                    </MDBCol>
                    <MDBCol sm = "3">
                        <Button gradient = "purple" icon = "users" text = "parents" size = "7x" to = "/parents"/>
                    </MDBCol>
                    <MDBCol sm = "3">
                        <Button gradient = "aqua" icon = "sms" text = "bulk-sms" size = "7x" to = "/communicate"/>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
           
        );
    }
}

const mapStateToProps = ({loginReducer, getSchoolsReducer}) => {
    const {name, password, token} = loginReducer;

    const {schools} = getSchoolsReducer;

    return {name, password, schools, token};
}

export default connect(mapStateToProps, {getAllSchools})(Dashboard);