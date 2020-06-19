import React, { Component } from 'react';
import BackgroundSlider from 'react-background-slider'
import {SignInHeader, Footer} from '../../components';


import bg1 from '../../asset/img/slide/bg1.jpg';
import bg2 from '../../asset/img/slide/bg2.jpg';
import bg3 from '../../asset/img/slide/bg3.png';
import bg4 from '../../asset/img/slide/bg4.png';
import bg5 from '../../asset/img/slide/bg5.jpg';
import { Col,Container,Row } from 'reactstrap';
import prayer from '../../asset/img/beech.jpg';


export default class Prayer extends Component {
    render() {
        return (
            <div>
                <ul class="cb-slideshow">
                    <li><span>Image 01</span><div><h3>re·lax·a·tion</h3></div></li>
                    <li><span>Image 02</span><div><h3>qui·e·tude</h3></div></li>
                    <li><span>Image 03</span><div><h3>bal·ance</h3></div></li>
                    <li><span>Image 04</span><div><h3>e·qua·nim·i·ty</h3></div></li>
                    <li><span>Image 05</span><div><h3>com·po·sure</h3></div></li>
                    <li><span>Image 06</span><div><h3>se·ren·i·ty</h3></div></li>
                </ul>
                <SignInHeader />
                <Container >
                <Row>
                    <Col xs="12" md="12" sm="12" lg="12" xl="12"  className="center" style={{marginTop:10, backgroundColor:'#000',padding:4,borderRadius:20,opacity:0.9,boxShadow:1,}}>
                        <h1 style={{alignContent:"center",margin:0}}>Iamacatholic Prayers Requests</h1>
                        <img src={prayer} className="img-fluid" alt="catho"  />
                    <p className="center" style={{fontSize:20}}>
                    Iamacatholic’s mission is to bring together all Catholics worldwide,we strongly support all prayers, send all prayer requests to prayers@iamacatholic.org today or use the prayer request form once you are in your account. God bless 
                    </p>
                    </Col>
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
