import React, { Component } from "react";
import "./style.css"

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [
                { id: 1, name: 'Gill Guntherson', department: 'finance', email: 'Gill@email.com' },
                { id: 2, name: 'Phillip Patterson', department: 'finance', email: 'Phillip@email.com' },
                { id: 3, name: 'Ed Sands', department: 'marketing', email: 'Ed@email.com' },
                { id: 4, name: 'Nancy Rodriguez', department: 'marketing', email: 'Nancy@email.com' },
                { id: 5, name: 'Pablo Sanchez', department: 'engineer', email: 'Pablo@email.com' },
                { id: 6, name: 'Nancy Rodriguez', department: 'marketing', email: 'Nancy@email.com' },
                { id: 7, name: 'Pablo Sanchez', department: 'engineer', email: 'Pablo@email.com' }
            ]
        }
    }

    renderTableData() {
        return this.state.employees.map((employees, index) => {
            const { id, name, department, email } = employees
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{department}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.employees[0])
        return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h4 id='title'>Employee Table</h4>
                <table id='employees'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;