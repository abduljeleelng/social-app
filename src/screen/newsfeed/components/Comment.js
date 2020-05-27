import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <form action="" className="comment-text d-flex align-items-center mt-3">
                <input type="text" className="form-control rounded" />
                <div className="comment-attagement d-flex">
                <a href="fake"><i className="ri-link mr-3" /></a>
                <a href="fake"><i className="ri-user-smile-line mr-3" /></a>
                <a href="fake"><i className="ri-camera-line mr-3" /></a>
                </div>
            </form>
        )
    }
}
