import React, { Component } from 'react';
import BackgroundSlider from 'react-background-slider'
import {SignInHeader,ForgetPassword,Footer} from '../../components';

import bg1 from '../../asset/img/slide/bg1.jpg';
import bg2 from '../../asset/img/slide/bg2.jpg';
import bg3 from '../../asset/img/slide/bg3.png';
import bg4 from '../../asset/img/slide/bg4.png';
import bg5 from '../../asset/img/slide/bg5.jpg';


export default class Forget extends Component {
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
                <ForgetPassword/>
                <Footer />
                <BackgroundSlider
                    images={[bg1,bg2,bg3,bg4,bg5]}
                    duration={10} transition={2} 
                />
                
            </div>
        )
    }
}
