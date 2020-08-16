import React, { Component } from "react";
import employees from "../../models/employees.json"
import "./style.css"
import TableHeader from "../TableHeader";
import TableData from "../TableData";

class Table extends Component {
        state = {
            employees
        };


  
    
    SortTable(props) {
        let sortedEmployees = [...this.state.employees];
        sortedEmployees.sort((a,b) => {
            if(a.name < b.name) {
                return -1;
            }
            if(a.name > b.name) {
                return 1;
            }
            return 0;
        });
        
    }

    

    render() {
        return (
            <div>
                <h4 id='title'>Employee Table</h4>
                <table id='employees'>
                    <tbody>
                        <tr><TableHeader  state={this.state}/></tr>
                        <TableData state={this.state} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;