import React, { Fragment } from 'react';
import {Container, Row, Col,Form,FormGroup,Label,Input,} from 'reactstrap';

import logo from '../../asset/img/logo.png';

export default function Header() {
    return (
        <Fragment>
            <Row className="fixed header" >
                <Container
                >
                    <Row>
                        <Col md="6" xs="6" xl="6" >
                            <div className="text-logo">
                             <img src={logo} alt="logo" height="50"  />  I am a Catholic
                            </div>
                        </Col>
                        <Col md="6" xs="6" xl="6" >
                            <Form>
                                <Row form>
                                    <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email or username</Label>
                                        <Input type="email"  placeholder="username" />
                                    </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password"  placeholder="password " />
                                    </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                    <FormGroup>
                                        <Label for="examplePassword"> ' </Label>
                                        <Input type="submit" className="btn btn-success" value="Login In" />
                                    </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                </Row>
        </Fragment>
    )
}
