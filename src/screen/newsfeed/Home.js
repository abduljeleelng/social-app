import React, { Component,Fragment  } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";


//import {Header} from '../../components'
import { Create,Header,Post, Story,Event, Birthday} from './components';

import '../../custom/css/typography.css';
import '../../custom/css/style.css';
import '../../custom/css/responsive.css';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            loadPost:false,
            loadStory:false,
            loadEvent:false,
            loadBirth:false,
        }
    }
    componentDidMount(){
        
    }
    render() {
        const {loadPost,loadStory,loadEvent,loadBirth}=this.state;
        return (
            <Fragment>
                <Header />
                <div id="content-page" class="content-page">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 row m-0 p-0">
                                <Create />
                                <ReactPlaceholder showLoadingAnimation  rows={7} ready={loadPost}>
                                    <Post />
                                </ReactPlaceholder>
                               
                            </div>
                            <div class="col-lg-4">
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadStory}>
                                    <Story />
                                </ReactPlaceholder>
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadEvent}>
                                    <Event />
                                </ReactPlaceholder>
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadBirth}>
                                    <Birthday /> 
                                </ReactPlaceholder>  
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
