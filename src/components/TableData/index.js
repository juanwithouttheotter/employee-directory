import React from "react";


function TableData(props) {
    return props.state.employees.map((employees, index) => {
        const { id, name, department, email } = employees
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{department}</td>
                <td>{email}</td>
            </tr>
        );
    });
}

export default TableData;