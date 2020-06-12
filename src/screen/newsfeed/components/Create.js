import React,{Component} from 'react';
import profileIcon from '../img/profileIcon.png'
import { profilePhoto } from '../../timeline/api';
import { isAuthenticated } from '../../../auth';
import { newPost,posts } from '../api';
//import { Redirect } from 'react-router-dom';

export default class Create extends Component {
  constructor(){
    super();
    this.state={
      body:'',
      photo:'',
      title:'',
      error:'',
      message:'',
      loading:false,
      reload:false,
    }
  }
 
  componentDidMount(){
    this.postData = new FormData();
  }
  handleChange=name=>event=>{
    this.setState({ error: "" });
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    this.postData.set(name, value);
    this.setState({ [name]: value });
  }
   handleCreatePost=e=>{
    e.preventDefault();
    this.setState({loading:true})
    const token = isAuthenticated().token;
    const userId = isAuthenticated().user._id;
    newPost(userId,token,this.postData).then(data=>{
      if(data.result){
        alert("Post successfull");
        this.setState({loading:false});
        posts().then(posts=>{
            //console.log(JSON.stringify(posts))
            //this.setState({loading:false});
            if(posts.error){
              console.log(JSON.stringify(posts));
            }else{
              this.props.updatePosts(posts);
              this.setState({loading:false,body:'',photo:'',});
            }
          //this.props.updatePosts(posts);
          //this.setState({loading:false,body:'',photo:''});
        });
        this.setState({loading:false,body:'',photo:''})
      }else{
        alert("Posting error");
        this.setState({loading:false})
      }
    })
  }
  render(){
    const {user}= this.props;
    const {body,loading,reload} = this.state;
    if(reload) return window.location.reload(); //<Redirect to="/" />
    return (
<div className="col-sm-12">
  <div id="post-modal-data" className="iq-card iq-card-block iq-card-stretch iq-card-height">
    <div className="iq-card-header d-flex justify-content-between">
      <div className="iq-header-title">
        <h4 className="card-title">Create Post</h4>
      </div>
    </div>
    <div className="iq-card-body" data-toggle="modal" data-target="#post-modal">
      <div className="d-flex align-items-center">
        <div className="user-img">
          <img src={`${profilePhoto}${user._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="user" className="avatar-60 rounded-circle" />
        </div>
        <form className="post-text ml-3 w-100" action="">
          <input type="text" className="form-control rounded" placeholder="Write  here..." />
        </form>
      </div>
      <hr />
      <ul className="post-opt-block d-flex align-items-center list-inline m-0 p-0">
        <li className="iq-bg-primary rounded p-2 pointer mr-3"><img src="images/small/07.png" alt="" className="img-fluid" /> Photo/Video</li>
        <li className="iq-bg-primary rounded p-2 pointer mr-3"><img src="images/small/08.png" alt="" className="img-fluid" /> Tag Friend</li>
        <li className="iq-bg-primary rounded p-2 pointer mr-3"><img src="images/small/09.png" alt="" className="img-fluid" /> Feeling/Activity</li>
        <li className="iq-bg-primary rounded p-2 pointer">
          <div className="iq-card-header-toolbar d-flex align-items-center">
            <div className="dropdown">
              <span className="dropdown-toggle" id="post-option" data-toggle="dropdown">
                <i className="ri-more-fill" />
              </span>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="post-option" style={{}}>
                <a className="dropdown-item" href="fake">Check in</a>
                <a className="dropdown-item" href="fake">Live Video</a>
                <a className="dropdown-item" href="fake">Gif</a>
                <a className="dropdown-item" href="fake">Watch Party</a>
                <a className="dropdown-item" href="fake">Play with Friend</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="modal fade" id="post-modal" tabIndex={-1} role="dialog" aria-labelledby="post-modalLabel" aria-hidden="true" style={{display: 'none'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
            <button type="button" className="btn btn-secondary" data-dismiss="modal"><i className="ri-close-fill" /></button>
          </div>
          <div className="modal-body">
            <div className="d-flex align-items-center">
              <div className="user-img">
                <img src={`${profilePhoto}${user._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="user" className="avatar-60 rounded-circle img-fluid" />
              </div>
              <form className="post-text ml-3 w-100" action="">
                <textarea type="text" value={body} onChange={this.handleChange("body")} className="form-control rounded" placeholder="Write here..." style={{border: 'none'}} ></textarea>
              </form>
            </div>
            <hr />
            <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
              <li className="col-md-6 mb-3">
                <div className="iq-bg-primary rounded p-2 pointer mr-3"><img src="images/small/07.png" alt="" type="file" className="img-fluid" /> <input onChange={this.handleChange("photo")} type="file" accept="image/*" /> Photo/Video</div>
              </li>
            </ul>
            <hr />
            <div className="other-option">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="user-img mr-3">
                    <img src={`${profilePhoto}${user._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="user" className="avatar-60 rounded-circle img-fluid" />
                  </div>
                  <h6>Your Story</h6>
                </div>
                <div className="iq-card-post-toolbar">
                  <div className="dropdown">
                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                      <span className="btn btn-primary">Friend</span>
                    </span>
                    <div className="dropdown-menu m-0 p-0">
                      <a className="dropdown-item p-3" href>
                        <div className="d-flex align-items-top">
                          <div className="icon font-size-20"><i className="ri-save-line" /></div>
                          <div className="data ml-2">
                            <h6>Public</h6>
                            <p className="mb-0">Anyone on or off Facebook</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item p-3" href>
                        <div className="d-flex align-items-top">
                          <div className="icon font-size-20"><i className="ri-close-circle-line" /></div>
                          <div className="data ml-2">
                            <h6>Friends</h6>
                            <p className="mb-0">Your Friend on facebook</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item p-3" href>
                        <div className="d-flex align-items-top">
                          <div className="icon font-size-20"><i className="ri-user-unfollow-line" /></div>
                          <div className="data ml-2">
                            <h6>Friends except</h6>
                            <p className="mb-0">Don't show to some friends</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item p-3" href>
                        <div className="d-flex align-items-top">
                          <div className="icon font-size-20"><i className="ri-notification-line" /></div>
                          <div className="data ml-2">
                            <h6>Only Me</h6>
                            <p className="mb-0">Only me</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
              loading ? "Posting ....." : <button type="submit" onClick={this.handleCreatePost} className="btn btn-primary d-block w-100 mt-3">Post</button>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</div>   
    )
  }
}
