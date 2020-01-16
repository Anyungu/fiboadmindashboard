import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer } from "mdbreact";


class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBContainer>
      <MDBNavbar color="default-color" dark expand="md" fixed = "top">
        <MDBNavbarBrand>
          <strong className="white-text">Fibo</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>

          <MDBNavItem >
              <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/devices">Devices</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/mpesa">Mpesa</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/schools">Schools</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/parents">Parents</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/communicate">Communicate</MDBNavLink>
            </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
          
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">log Out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </MDBContainer>
    );
  }
}

export default NavBar;