import React, { useState } from "react";
import TableHeader from "../TableHeader";

const TableFilter = (props) => {
    const {employees} = props.state;
    const {search} = props.state;

    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const [searchInput, setSearchInput] = useState(search);

    const handleInputChange = event => {
        setSearchInput(event.target.value);
    };

    const handleFormFilter = event => {
        // event.preventDefault();
        setFilteredEmployees(employees.filter(employee => employee.department === "engineer"));
        console.log(filteredEmployees);
    }

    return (
        <div>
            <div>
                <input
                    value={searchInput}
                    onChange={() => handleInputChange()}
                    className="form-control"
                ></input>
                <button onClick={() => handleFormFilter()}>Filter</button>
            </div>
            <table id='employees'>
                <TableHeader
                    employees={filteredEmployees}
                />
            </table>
        </div>
    )
}

export default TableFilter;