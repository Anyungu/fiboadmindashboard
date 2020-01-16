import React, {Component} from "react";
import {MDBBtn,
        MDBIcon,
        MDBCard,
        MDBNavLink
    } from 'mdbreact'

class Button extends Component  { 

    buttonClicked() {

        if (this.props.handleFormStateChange) {
        this.props.handleFormStateChange();
        }
    }
    render() {

        const {lowerTextStyle} = styles;
        return(
            <MDBCard>
                <MDBBtn floating gradient= {this.props.gradient} onClick = {this.buttonClicked.bind(this)}>
                    <MDBNavLink className="text-white" to={this.props.to}>
                        <MDBIcon icon= {this.props.icon}  size = {this.props.size}  />    
                    </MDBNavLink>
                </MDBBtn>
                <p style = {lowerTextStyle}>
                    {this.props.text}
                </p>
            </MDBCard>
        );
    }
}

const styles = {
    lowerTextStyle : {
        textAlign: "center"
    }
}





export default Button;