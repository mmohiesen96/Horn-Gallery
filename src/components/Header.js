import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {

    render() {
        return (
                <Container fluid>
                    <Row>
                        <Col><h1>Horn beast gallery</h1></Col>
                    </Row>
                </Container>
        )
    }
}

export default Header;