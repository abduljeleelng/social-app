import React, { Component } from 'react'
import { isAuthenticated } from '../../../auth';
import { comment, uncomment } from '../api';

export default class Comment extends Component {
    state = {
        text: "",
        error: ""
    };

    handleChange = event => {
        this.setState({ text: event.target.value,error:'' });
    };

    isValid = () => {
        const { text } = this.state;
        if (!text.length > 0 || text.length > 150) {
            this.setState({error:"Comment should not be empty and less than 150 characters long"});
            return false;
        }
        return true;
    };

    addComment = e => {
        e.preventDefault();
        if (!isAuthenticated) {
            this.setState({ error: "Please signin to leave a comment" });
            return false;
        }

        if (this.isValid()) {
            const userId = isAuthenticated().user._id;
            const token = isAuthenticated().token;
            const postId = this.props.postId;

            comment(userId, token, postId, { text: this.state.text }).then(
                data => {
                    if (data.error) {
                        console.log(data.error);
                    } else {
                        this.setState({ text: "" });
                        // dispatch fresh list of coments to parent (SinglePost)
                        this.props.updateComments(data.comments);
                    }
                }
            );
        }
    };

    deleteComment = comment => {
        const userId = isAuthenticated().user._id;
        const token = isAuthenticated().token;
        const postId = this.props.postId;
        uncomment(userId, token, postId, comment).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.props.updateComments(data.comments);
            }
        });
    };

    deleteConfirmed = comment => {
        let answer = window.confirm(
            "Are you sure you want to delete your comment?"
        );
        if (answer) {
            this.deleteComment(comment);
        }
    };

    render() {
        const { comments } = this.props;
        const { error } = this.state;
        return (
            <form action={this.addComment} className="comment-text d-flex align-items-center mt-3">
                <input 
                type="text"
                onChange={this.handleChange}
                value={this.state.text} 
                className="form-control rounded" />
                <div className="comment-attagement d-flex">
                <i className="ri-link mr-3" />
                <i className="ri-user-smile-line mr-3" />
                <i className="ri-camera-line mr-3" />
                </div>
            </form>
        )
    }
}
