import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = (props) => (
    <div className="col-sm-9 table-responsive" style={{maxHeight: '590px', overflow: 'auto'}}>
        <div className="alert alert-success">
            <strong>{props.state.tableName}</strong>
        </div>
        <table className="table table-bordered">
            <thead> 
                <tr style={{border: props.border}} className="bg-info">
                    <th>Sr. No</th>
                    {props.state.cellValue.map((vl, index) => <th key={index} style={{border: props.border}}>Column {index + 1}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.state.rowValue.map((vl, index) => (
                    <tr key={index} style={{border: props.border}}>
                        <td className="bg-info">{index+1}</td>
                        {props.state.cellValue.map((vl, i) => (<td key={i} style={{border: props.border}}><input type="text" className="form-control" disabled={props.state.chkBox} /></td>))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default Table;