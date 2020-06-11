import React, { Component } from 'react'
import { isAuthenticated } from '../../../auth';
import { comment, uncomment, posts } from '../api';

export default class Comment extends Component {
    state = {
        text: "",
        error: "",
        loading:false,
    };

    handleChange = event => {
        this.setState({ text: event.target.value,error:'' });
    };

    isValid=()=> {
        //e.preventDefault();
        const { text } = this.state;
        if (!text.length > 0 || text.length > 150) {
            this.setState({error:"Comment should not be empty and less than 150 characters long"});
            alert("Comment should not be empty and less than 150 characters long");
            return false;
        }
        return true;
    };

    addComment=e=> {
        e.preventDefault();
        const {text} = this.state;
        if (!isAuthenticated) {
            this.setState({ error: "Please signin to leave a comment" });
            return false;
        }
        if (this.isValid()) {
            this.setState({loading:true});
            const userId = isAuthenticated().user._id;
            const token = isAuthenticated().token;
            const postId = this.props.postId;
            comment(userId, token, postId, {text}).then(data =>{
                if(data.error){
                    alert("error in posting comment ");
                }else{
                    alert("comment was successful");
                    posts().then(posts=>{
                        console.log(JSON.stringify(posts));
                        this.setState({loading:false});
                        if(posts.error){
                          console.log(JSON.stringify(posts));
                        }else{
                          this.props.updatePosts(posts);
                          this.setState({loading:false,body:'',photo:'',});
                        }
                      });
                    this.setState({text:""})
                }
            })           
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
       // const { comments } = this.props;
       const { loading } = this.state;
        return (
            <form className="comment-text d-flex align-items-center mt-3">
                <textarea 
                type="text"
                cols={1}
                rows={1}
                onChange={this.handleChange}
                value={this.state.text} 
                className="form-control rounded" ></textarea>
                <div className="comment-attagement d-flex">
                {
                    loading ? ("posting...."):
                    <i onClick={this.addComment} className="dripicons-direction mr-3" />
                }
                </div>
            </form>
        )
    }
}
