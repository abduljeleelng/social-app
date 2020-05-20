import React, { Component,Fragment  } from 'react';


//import {Header} from '../../components'
import { Create,Header,Post, Story,Event, Birthday} from './components';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div id="content-page" class="content-page">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 row m-0 p-0">
                                <Create />
                                <Post />
                            </div>
                            <div class="col-lg-4">
                                <Story />
                                <Event />
                                <Birthday />       
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
