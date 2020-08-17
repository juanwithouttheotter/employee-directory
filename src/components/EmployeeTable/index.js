import React, { Component } from "react";
import employees from "../../models/employees.json"
import "./style.css"
import TableHeader from "../TableHeader";
import TableData from "../TableData";

class Table extends Component {
        state = {
            employees
        };
    

    render() {
        return (
            <div>
                <h4 id='title'>Employee Table</h4>
                <table id='employees'>
                    <tbody>
                        <TableHeader  
                        state={this.state}
                        sortTable={this.SortTable}
                        />
                        <TableData state={this.state} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;