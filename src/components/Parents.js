import React, {Component} from 'react';
import {MDBContainer, 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBBtn,
    MDBIcon
} from 'mdbreact';
import NavBar from './reusable/NavBar';
import DataTable from './reusable/DataTable';
import DropDownSelect from './reusable/DropDownSelect';
import {connect} from 'react-redux';
import {getAllSchoolParents} from '../actions';

class Parents extends Component {

    constructor (props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    
    }


   
    state = {

        columns: [
            {
              label: 'Adm. No',
              field: 'adm',
              sort: 'asc',
              width: 150
            },
            {
              label: 'phone Number',
              field: 'phone',
              sort: 'asc',
              width: 270
            },
            {
              label: 'Account Status',
              field: 'status',
              sort: 'asc',
              width: 200
            },

            {
                label: 'first Login',
                field: 'login',
                sort: 'asc',
                width: 200
              },

              {
                label: '',
                field: 'actionTwo',
                sort: 'asc',
                width: 200
              },

              {
                label: '',
                field: 'actionOne',
                sort: 'asc',
                width: 200
              },
           
          ],

          selectedSchoolCode: ''
      };

    refreshClick () {

        this.props.getAllSchoolParents(this.state.selectedSchoolCode, this.props.token);

    }

    onSelect (selected) {

        this.setState({
            selectedSchoolCode: selected.value
        })

        this.props.getAllSchoolParents(selected.value, this.props.token);
    }

    loginFail() {

        if (this.props.token === '') {

            this.props.history.push("/");

        }

    }
 
    render () {
        const {counterFontSize} = styles;
        return (
            <MDBContainer  className = "pt-5" >

            {this.loginFail()}
            <NavBar/> 

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

const styles = {
    counterFontSize: {
        fontWeight: 'bold',
        fontSize: 40
    }
}

const mapStateToProps = ({loginReducer, getSchoolsReducer, parentReducer}) => {
    const {name, password, token} = loginReducer;

    const {schools, schoolOptions} = getSchoolsReducer;

    const {parentRows} = parentReducer;

    return {name, password, token, schools, parentRows, schoolOptions};
}

export default connect(mapStateToProps,{getAllSchoolParents})(Parents);

