import React from "react";
import Container from  "../components/Container";
import Row from "../components/Row";
import Table from "../components/EmployeeTable"

function Home() {
    return(
    <div className="mx-auto my-4">
        <Container fluid="true">
            <Row fluid="true">
               <Table />
            </Row>
        </Container>
    </div>
    );
}
export default Home;