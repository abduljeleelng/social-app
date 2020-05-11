import React from 'react';
import {Container, Row, Col,Form,FormGroup,Label,Input,} from 'reactstrap';
//import logo from '../../asset/img/logo.png';

export default function Create() {
    return (
        <Container >
            <Row>
            <Col-6>
           
            </Col-6>
            <Col>
            <Row className="float-right regBox" style={{margin:20,backgroundColor:'#000',padding:20,borderRadius:20,opacity:0.9,boxShadow:1}}>
                <Col-6 md="12" xs="12" xl="12" className="regBox" >
                    <Form className="regBox">
                        <Row form>
                            <Col md={6}>
                            <FormGroup>
                                <Input type="text"  placeholder="First Name" />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Input type="text"  placeholder="Surname " />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                            <FormGroup>
                                <Input type="email"  placeholder="email" />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                            <FormGroup>
                                <Input type="password"  placeholder="password " />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                            <Label for="exampleSelect">Day</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Input>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                            <Label for="exampleSelect">Month</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Input>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                            <Label for="exampleSelect">Year</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Input>
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                            <Label for="exampleSelect">Gender</Label>
                            <Input type="select">
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Custom</option>
                            </Input>
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                            <FormGroup>
                            <Input className="btn btn-success" type="submit" value="Sign up" />
                            </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col-6>
            </Row>
            </Col>
            </Row>
        </Container>
    )
}
