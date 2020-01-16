import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';

class DataTable extends Component {

 

    render() {

const data = {
    columns: this.props.columns,
    rows: this.props.rows
  };

  return (
    <MDBDataTable
      striped
      hover
      data={data}
      scrollX
    />
  );
}
}

export default DataTable;
