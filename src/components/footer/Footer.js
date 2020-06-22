import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    const style = {
        position:"fixed",                 
        bottom:0, 
        width:"100%",
        backgroundColor:"#000000",                  
    }
    return (
        <footer style={style} >
            <Container>
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
