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
                            <Link to="/about/about"> About</Link>
                        </li>
                        <li>
                            <Link to="/about/term"> Term </Link>
                        </li>
                        <li>
                            <Link to="/about/privacy"> Privacy </Link> 
                        </li>
                        <li>
                            <Link to="/about/prayer"> Prayer</Link>
                        </li>
                        <li>
                            <Link to="/about/help"> Help </Link>
                        </li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
