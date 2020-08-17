import React, { useState, setState } from "react";
import TableData from "../TableData";


function TableHeader(props) {
    const { employees } = props.state;
    const [sortedEmployees, setSortedEmployees] = useState(employees);

    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

    if (sortedEmployees !== null) {

        sortedEmployees.sort((a, b) => {

            console.log(a[sortConfig.key] + " and " + b[sortConfig.key])
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }

            if (b[sortConfig.key] > a[sortConfig.key]) {
                console.log("here");
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }

            return 0;
        });
    }

    const reqSort = key => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    return (
        <tbody>
            <tr>
                <th key="ID" onClick={() => reqSort('id')}>ID</th>
                <th key="NAME" onClick={() => reqSort('name')}>NAME</th>
                <th key="DEPARTMENT" onClick={() => reqSort('department')}>DEPARTMENT</th>
                <th key="EMAIL" onClick={() => reqSort('email')}>EMAIL</th>
            </tr>
            <TableData employees={sortedEmployees} />
        </tbody>
    );
}

export default TableHeader;