










likePost=(userId, token, id)=>{
    const { post }= this.state;
    like(userId, token, post.id).then(data=>{if (data.error) {console.log(data.error);} else 
    {this.setState({like: !this.state.like,likes: post.likes.length});}})
}
unLikePost=(userId, token, id)=>{
    const { post }= this.state;
    unlike(userId, token, post.id).then(data=>{if (data.error) {console.log(data.error);} else 
    {this.setState({like: !this.state.like,likes: post.likes.length});}})
}





render(){
//const posts = this.props.posts
//const {like,likes,posts}=this.state;
///console.log(JSON.stringify(posts));
return (
  <Fragment>
    {
      this.renderPost()
    }
  </Fragment>
)
}