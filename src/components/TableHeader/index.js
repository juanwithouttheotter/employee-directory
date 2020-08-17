import React, {useState} from "react";


function TableHeader(props) {
    const {employees} = props.state;
    const [sortedField, setSortedField] = useState(null);
    let sortedEmployees = [...employees];
    if (sortedEmployees !== null) {
        sortedEmployees.sort((a,b) => {
            if (a[sortedField] < b[sortedField]){
                return -1;
            }
            if (a[sortedField] > b[sortedField]) {
                return 1;
            }
            return 0;
        });
        console.log(sortedEmployees);
    }

    return(
        <tr>
            <th key="ID" onClick={() => setSortedField('id')}>ID</th>
            <th key="NAME" onClick={() => setSortedField('name')}>NAME</th>
            <th key="DEPARTMENT" onClick={() => setSortedField('department')}>DEPARTMENT</th>
            <th key="EMAIL" onClick={() => setSortedField('email')}>EMAIL</th>
        </tr>
    )

    // let header = Object.keys(props.state.employees[0])
    // return header.map((key, index) => {
    // return <th key={index} onClick={() => props.sortTable()}>{key.toUpperCase()}</th>
    // });
}

export default TableHeader;