import React, { Component } from "react";
import employees from "../../models/employees.json"
import TableFilter from "../TableFilter";
import "./style.css"

class Table extends Component {
    state = {
        employees
    };
    
    render() {
        return (
            <div>
                <h4 id='title'>Employee Table</h4>
                <TableFilter
                state={this.state}
                />
               
            </div>
        );
    }
}

export default Table;