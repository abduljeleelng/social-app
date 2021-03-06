import React, { Component } from 'react';

import {SignInHeader, Footer} from '../../components';



import { Col,Container,Row } from 'reactstrap';
//import catho from '../../asset/img/catho.png';
import catho from './img/catholic.png';


export default class Help extends Component {

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
                    <Col xs="12" md="3" sm="12" lg="3" xl="3" ></Col>
                    <Col xs="12" md="3" sm="12" lg="6" xl="6"  className="center" style={{margin:20,marginBottom:100,  backgroundColor:'#000',padding:20,borderRadius:20,opacity:0.9,boxShadow:1}}>
                        <h1 style={{alignContent:"center",margin:25}}>Why <b>Iamacatholic</b> Exists</h1>
                        <img src={catho} alt="catho" width="200" height="200" className="img-fluid" style={{alignSelf:'center', margin:15}} />
                    <p style={{fontSize:20}}>
                    Iamacatholic’s mission is to bring together all Catholics worldwide under
                    one unique community and grow. We want to connect the people who have the 
                    desire to the share in the experiences of other people who may be in need, 
                    Also, to bring together people with different perspectives so they can 
                    understand each other more, and to help empower everyone to build a better 
                    society for the benefit of the world.
                    </p>
                    </Col>
                    <Col xs="12" md="3" sm="12" lg="3" xl="3"></Col>
                </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}
