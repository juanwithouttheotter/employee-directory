import React, { useState } from "react";
import TableHeader from "../TableHeader";
import Row from "../Row";
import Col from "../Col";
import {Button} from "react-bootstrap";



const TableFilter = (props) => {
    const { employees } = props.state;

    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const [searchInput, setSearchInput] = useState({key: 'Select field', search: ''});

    const handleInputChange = event => {
        setSearchInput({search: event.target.value});
        console.log(searchInput.search);
    };

    const handleFormFilter = event => {
        event.preventDefault();

        setFilteredEmployees(employees.filter(employee => employee[searchInput.key] === searchInput.search));
        console.log(filteredEmployees);
    }
    const filterField = key => {
        setSearchInput({key});
    }
    const handleFieldChange = event => {
        setSearchInput({key: event.target.value });
        console.log(searchInput.key);
    }

    return (
        <div>
            {/* <form> */}
            <Row>
                <Col size="md-6">
                <input
                    value={searchInput.search}
                    type="text"
                    id="fieldInput"
                    onChange={handleInputChange}
                    
                ></input>
                </Col>
                
                <select value={searchInput.key} onChange={handleFieldChange}>
                    <option value="Id" >Id</option>
                    <option value="Name" >Name</option>
                    <option value="Department" >Department</option>
                    <option value="Email" >Email</option>
                </select>
              

                <Col size="md">
                <Button variant="success" onClick={() => handleFormFilter()}>Filter</Button>
                </Col>
            </Row>
            {/* </form> */}

            <table id='employees'>
                <TableHeader
                    employees={filteredEmployees}
                />
            </table>
        </div >
    )
}

export default TableFilter;