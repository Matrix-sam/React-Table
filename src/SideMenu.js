import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideMenu = (props) => (
    <div className="col-sm-3 bg-info">
        <div className="row">
            <div className="col-sm-12 form-group">
                <label>Table Name</label>
                <input type="text" className="form-control" onChange={(e) => props.handleChange(e, 'tableName')} name="tableName" />
            </div>
            <div className="col-sm-12 form-group">
                <label>Increment/decrement for row <span class="badge badge-light">{props.row}</span></label>
                <input type="range" id="rowRange" className="form-control" defaultValue="1" min="1" onChange={(e) => props.handleChangeRange(e, 'rowValue')} max="50" name="rowRange" step="1" />
            </div>
            <div className="col-sm-12 form-group">
                <label>Increment/decrement for cell <span class="badge badge-light">{props.cell}</span></label>
                <input type="range" id="cellRange" className="form-control" defaultValue="1" min="1" onChange={(e) => props.handleChangeRange(e, 'cellValue')} max="50" name="cellRange" step="1" />
            </div>
            <div className="col-sm-12 form-group">
                <label>Select border thinckness&nbsp;</label>
                <select onChange={(e) => props.handleChange(e, 'thinckness')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="col-sm-12 form-group">
                <label>Allowing for editing cell&nbsp; </label>
                <input type="checkbox" onChange={props.checkboxHandler} />
            </div>
        </div>
    </div>
);

export default SideMenu;