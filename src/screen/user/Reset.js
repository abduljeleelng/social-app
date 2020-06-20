import React, { Component } from 'react';

import {SignInHeader, ResetPassword,Footer} from '../../components';



export default class Reset extends Component {
    state ={
        redirect :false,
        resetPasswordLink:'',
    }

    componentDidMount(){
        const resetPasswordLink = this.props.match.params.code;
        this.setState({resetPasswordLink})
    }
    render() {
        const {resetPasswordLink} = this.state;
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
                <ResetPassword resetPasswordLink={resetPasswordLink} />
                <Footer />
            </div>
        )
    }
}
