import React, { Component } from 'react';
import BackgroundSlider from 'react-background-slider'
import {SignInHeader, Footer} from '../../components';


import bg1 from '../../asset/img/slide/bg1.jpg';
import bg2 from '../../asset/img/slide/bg2.jpg';
import bg3 from '../../asset/img/slide/bg3.png';
import bg4 from '../../asset/img/slide/bg4.png';
import bg5 from '../../asset/img/slide/bg5.jpg';

import { Col,Container,Row } from 'reactstrap';
import catho from '../../asset/img/catho.png';


export default class Help extends Component {

    render() {
        
        return (
            <div>
                <SignInHeader />
                <Container >
                <Row>
                    <Col xs="12" md="3" sm="12" lg="3" xl="3" ></Col>
                    <Col xs="12" md="3" sm="12" lg="6" xl="6"  className="center" style={{margin:20,backgroundColor:'#000',padding:20,borderRadius:20,opacity:0.9,boxShadow:1}}>
                        <h1 style={{alignContent:"center",margin:25}}>Why <b>Iamacatholic</b> Exists</h1>
                        <img src={catho} alt="catho" style={{alignSelf:'center',float:'inline-start', margin:15}} />
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
                <BackgroundSlider
                    images={[bg1,bg2,bg3,bg4,bg5]}
                    duration={10} transition={2} 
                />
            </div>
        )
    }
}