import React from "react";

function TableHeader(props) {

    let header = Object.keys(props.state.employees[0])
    return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
    });
}

export default TableHeader;