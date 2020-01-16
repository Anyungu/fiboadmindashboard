import React , {Component} from 'react';
import {MDBContainer, 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBBtn,
    MDBIcon,
    MDBNavLink
} from 'mdbreact';

import DataTable from './reusable/DataTable';
import NavBar from'./reusable/NavBar';
import {connect} from 'react-redux';
import {getAllSchools} from '../actions';


class AllSchools extends Component {

    state = {
      
        columns: [
            {
              label: 'Code',
              field: 'code',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Name',
              field: 'name',
              sort: 'asc',
              width: 270
            },
            {
              label: 'Email',
              field: 'email',
              sort: 'asc',
              width: 200
            },

            {
                label: 'County',
                field: 'county',
                sort: 'asc',
                width: 200
              },

              {
                label:  '',
                field: 'action',
                sort: 'asc',
                width: 200
              },
           
          ]
      };


      showDatatable() {
          if(this.props.schoolRows.length > 0) {
        return <DataTable columns = {this.state.columns} rows = {this.props.schoolRows}/>
          }
      }

      refreshClick () {
        this.props.getAllSchools(this.props.token);

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
                                <p style = {counterFontSize} > {this.props.schoolRows.length} </p>
                            </MDBCol>
                        
                    </MDBRow>
                

                    <MDBRow center>
                        <MDBCol sm = "3">
                           <p style = {counterFontSize}> Revenue : </p>
                        </MDBCol>

                        <MDBCol sm = "3">
                            <p style = {counterFontSize} > 1000000 </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                </MDBCol>
                </MDBRow>

                <MDBRow center>
                  
                        {this.showDatatable()}
                    
                </MDBRow>
               
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

    const {schools, schoolRows} = getSchoolsReducer;

    return {name, password, schools, schoolRows, token};
}

export default connect(mapStateToProps, {getAllSchools}) (AllSchools);

