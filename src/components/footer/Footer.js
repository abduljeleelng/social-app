import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <Container>

                <h5>I am a Catholic </h5>
                <hr />
                <Row>
                 
                    <Col>
                    <ul >
                        <li>
                            <Link to="/about"> About</Link>
                        </li>
                        <li>
                            <Link to="/term"> Term </Link>
                        </li>
                        <li>
                            <Link to="/privacy"> Privacy </Link> 
                        </li>
                        <li>
                            <Link to="/prayer"> Prayer</Link>
                        </li>
                        <li>
                            <Link to="/help"> Help </Link>
                        </li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
