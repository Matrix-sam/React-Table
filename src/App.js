import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './SideMenu'
import Table from './table';

class App extends Component {
  state = {
    rowValue: [0],
    cellValue: [0],
    tableName: 'Table Name',
    thinckness: 1,
    chkBox: true
  }
  handleChange = (e, name) => {
    this.setState({[name]: e.target.value})
  }
  handleChangeRange = (e, name) => {
    this.setState({[name]: new Array(Number(e.target.value)).fill(0)})
  }
  checkboxHandler = e => {
    this.setState({ chkBox: !this.state.chkBox})
  }
  render() {
    let border = `${this.state.thinckness}px solid #dee2e6`;
    return (
      <div className="container bg-secondary">
        <div className="jumbotron"><h1 className="text-center"> Assignment React Table</h1></div>
        <div className="row">
          <SideMenu 
            handleChange={this.handleChange} 
            handleChangeRange={this.handleChangeRange} 
            checkboxHandler={this.checkboxHandler} 
            row={this.state.rowValue.length}
            cell={this.state.cellValue.length}
          />
          <Table state={this.state} border={border} />
        </div>
      </div>
    );
  }
}

export default App;
