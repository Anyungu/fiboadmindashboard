import React, {Component} from 'react';
import Select from 'react-select';


class DropDownSelect extends Component {


    constructor (props) {
        super(props);

        this.optionSelected = this.optionSelected.bind(this);
    }

 


    optionSelected = selected => {

        if (this.props.onSelect) {

            this.props.onSelect(selected);

        }

        if (this.props.onSelectAudience) {

            this.props.onSelectAudience(selected);

        }

        if (this.props.onSelectSchool) {

            this.props.onSelectSchool(selected);

        }
        
      
     
    }

    render () {
      
        return (

            

            <Select
               
                onChange={this.optionSelected}
                options={this.props.options}
                placeholder = {this.props.placeholder}
            />

        );
    }
}

export default DropDownSelect;