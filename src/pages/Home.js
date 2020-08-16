import React from "react";
import Container from  "../components/Container";
import Row from "../components/Row";
import Col from  "../components/Col";
import Table from "../components/EmployeeTable"

function Home() {
    return(
    <div className="m-auto">
        <Container fluid>
            <Row fluid>
                <Col size="md-12" >
                    <Table />
                </Col>
            </Row>
        </Container>
    </div>
    );
}
export default Home;