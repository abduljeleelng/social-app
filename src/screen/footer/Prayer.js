import React, { Component } from 'react';

import {SignInHeader, Footer} from '../../components';

import { Col,Container,Row } from 'reactstrap';
import prayer from '../../asset/img/beech.jpg';


export default class Prayer extends Component {
    render() {
        return (
            <div>
                <ul class="cb-slideshow">
                    <li><span>Image 01</span><div><h3> Faith in God</h3></div></li>
                    <li><span>Image 02</span><div><h3>Social with Christ</h3></div></li>
                    <li><span>Image 03</span><div><h3>We Love christ</h3></div></li>
                    <li><span>Image 04</span><div><h3>Uniformity</h3></div></li>
                    <li><span>Image 05</span><div><h3>Love</h3></div></li>
                    <li><span>Image 06</span><div><h3>Sincerity</h3></div></li>
                </ul>
                <SignInHeader />
                <Container >
                <Row>
                    <Col xs="12" md="12" sm="12" lg="12" xl="12"  className="center" style={{marginTop:10, marginBottom:100, backgroundColor:'#000',padding:4,borderRadius:20,opacity:0.9,boxShadow:1,}}>
                        <h1 style={{alignContent:"center",margin:0}}>Iamacatholic Prayers Requests</h1>
                        <img src={prayer} className="img-fluid" alt="catho"  />
                    <p className="center" style={{fontSize:20}}>
                    Iamacatholic’s mission is to bring together all Catholics worldwide,we strongly support all prayers, send all prayer requests to prayers@iamacatholic.org today or use the prayer request form once you are in your account. God bless 
                    </p>
                    </Col>
                </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}
