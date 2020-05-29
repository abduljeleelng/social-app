import React, { Component, Fragment } from 'react';
//import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import {Header,Footer} from '../newsfeed/components'
//import SweetAlert from 'sweetalert2-react';
import Swal from 'sweetalert2';
import logo from './img/profileIcon.png';
import noProfile from './img/profileIcon.png'
import {user,update} from './api'
import { isAuthenticated } from '../../auth';

export default class Setting extends Component {
  constructor(props){
    super(props);
    this.state={
      ready:false,
      user:'',
      about:'',
      photo:'',
      cover:'',
      fileSize: 0,
      error:'',
      show:false,
      message:'',
      email:'',
      password:'',
      password2:'',
      username:'',
      day:'',
      month:'',
      year:'',
    }
  };
  componentDidMount(){
    this.userData = new FormData();
    this.setState({ user:isAuthenticated().user });
    const userId = isAuthenticated().user._id;
    if(!userId){this.setState({reDirect:true});}
    user(userId).then(data=>{
      if(data.error){return console.log(data.error)}
      console.log(JSON.stringify({data}));
      this.setState({
        username:data.username,
        email:data.email,
        day:data.day,
        month:data.month,
        year:data.year,
        about:data.about,
        address:data.address,
        phone:data.phone,
        qoutes:data.qoutes,
      })
      this.setState({about:data})
    })
  }

  handleChange=name=>event=>{
    this.setState({ error: "" });
    const value = name === "photo" ? event.target.files[0] : event.target.value; // || name === "cover" ? event.target.files[0] : event.target.value ;
    this.userData.set(name, value);
    this.setState({ [name]: value});
  };

  handlePhotoUpdate=e=>{
    e.preventDefault();
    this.setState({loading:true});
    const token = isAuthenticated().token;
    const userId = isAuthenticated().user._id;
    update(userId,token,this.userData).then(data=>{
      if(data.error){ 
        console.log(data);
        this.setState({loading:false,error:'error in uploading your profile | cover photo\n note your photo should not more than 10MB '});
        return  Swal.fire({
          title:'error in uploading your profile | cover photo\n note your photo should not more than 10MB ',
          icon: 'error',
          allowOutsideClick:false,
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#3085d6',
          preConfirm:()=>{
            this.setState({loading:false,});
            //console.log('redirect')
          }
        })
      }
      else{
      this.setState({ loading:false,gohome:true,cover:"",photo:"",message:data.message,});
        return  Swal.fire({
          title:data.message,
          icon: 'success',
          allowOutsideClick:false,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#3085d6',
          preConfirm:()=>{
            this.setState({loading:false,show:true});
            //console.log('redirect')
          }
        })
      }
    })
  }

  handleUpdate=e=>{
    e.preventDefault();
    this.setState({loading:true})
  }

  componentDidUpdate(prevProps,prevState){

  }
    render() {
      const {user,show,loading,username,email,password,password2,day,month,year,phone,address,about,qoutes,}=this.state;
      if(show) return window.location.reload();

    return (
      <Fragment>
        <div className="wrapper">
    <Header logo={logo} user={user} noProfile={noProfile} profile='' />
    <div id="content-page" className="content-page">
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="row">
                <div className="col-lg-6">
                    <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                        <h4 className="card-title">Account Setting</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="acc-edit">
                        <form>
                            <div className="form-group">
                            <label htmlFor="uname">Username:</label>
                            <input value={username} onChange={this.handleChange("username")} type="text" className="form-control" placeholder="username"  />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Email Id:</label>
                            <input value={email} type="email" onChange={this.handleChange("email")}  className="form-control" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Password</label>
                            <input value={password} type="password" onChange={this.handleChange("password")}  className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Confirm Password</label>
                            <input value={password2} type="password" onChange={this.handleChange("password2")}  className="form-control" placeholder="Confirm Password" />
                            </div>
                            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Date of Birth  </label>
                <div className="row">
                  <div className="col-sm-4">
                    <select onChange={this.handleChange("day")} value={day} className="form-control">
                    <option value=""> Select day</option>
                    <option value="1"> 01 </option>
                    <option value="2"> 02 </option>
                    <option value="3"> 03</option>
                    <option value="4"> 04 </option>
                    <option value="5"> 05 </option>
                    <option value="6"> 06 </option>
                    <option value="7"> 07 </option>
                    <option value="8"> 08 </option>
                    <option value="9"> 09 </option>
                    <option value="10"> 10 </option>
                    <option value="11"> 11 </option>
                    <option value="12"> 12</option>
                    <option value="13"> 13</option>
                    <option value="14"> 14</option>
                    <option value="15"> 15</option>
                    <option value="17"> 17</option>
                    <option value="18"> 18</option>
                    <option value="19"> 19</option>
                    <option value="20"> 20</option>
                    <option value="21"> 21</option>
                    <option value="22"> 22</option>
                    <option value="23"> 23</option>
                    <option value="24"> 24</option>
                    <option value="25"> 25</option>
                    <option value="26"> 26</option>
                    <option value="27"> 27</option>
                    <option value="28"> 28</option>
                    <option value="29"> 29</option>
                    <option value="30"> 30</option>
                    <option value="31"> 31</option>
                    </select> 
                  </div>
                  <div className="col-sm-4">
                    <select onChange={this.handleChange("month")} value={month} className="form-control"> 
                    <option value=""> Select Month</option>
                    <option value="1"> January </option>
                    <option value="2"> February </option>
                    <option value="3"> March </option>
                    <option value="4"> April </option>
                    <option value="5"> May</option>
                    <option value="6"> June </option>
                    <option value="7"> July </option>
                    <option value="8"> August </option>
                    <option value="9"> Septmber </option>
                    <option value="10"> October </option>
                    <option value="11"> Noveber </option>
                    <option value="12"> December </option>
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <input type="text" onChange={this.handleChange("year")} value={year} className="form-control"  placeholder="1980" /> 
                  </div>
                </div>
              </div>
                            <div className="form-group">
                            <label className="d-block">Language Known:</label>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" className="custom-control-input" id="english" defaultChecked />
                                <label className="custom-control-label" htmlFor="english">English</label>
                            </div>
                            </div>
                            {
                              loading ? "loading.." : <button type="submit" onClick={this.handlePhotoUpdate} className="btn btn-primary">Update </button>
                            }
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                        <h4 className="card-title">Profile Picture </h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="acc-edit">
                        <form>
                            <div className="form-group">
                            <label htmlFor="uname">Profile Picture [400X400] </label>
                            <input type="file" className="form-control" accept="image/*" onChange={this.handleChange("photo")}   />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Profile Cover Picture [1200X400]</label>
                            <input type="file" className="form-control" accept="image/*" onChange={this.handleChange("cover")}  />
                            </div>
                            {
                              loading ? ("Loading..") :
                              <button type="submit" onClick={this.handlePhotoUpdate} className="btn btn-primary">Update picture</button>
                            }
                            
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                        <h4 className="card-title">About me</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="acc-edit">
                        <form>
                        <div className="form-group">
                            <label htmlFor="uname">Phone Number :</label>
                            <input value={phone} onChange={this.handleChange("phone")} type="text" className="form-control" placeholder="about"  />
                            </div>
                            <div className="form-group">
                            <label htmlFor="uname">Address:</label>
                            <input value={address} onChange={this.handleChange("address")} type="text" className="form-control" placeholder="about"  />
                            </div>
                            <div className="form-group">
                            <label htmlFor="uname">about :</label>
                            <input value={about} onChange={this.handleChange("about")} type="text" className="form-control" placeholder="about"  />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Favourite Qoutes </label>
                            <input value={qoutes} onChange={this.handleChange("qoutes")} type="text"  className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 text-center">
                <img src="images/page-img/page-load-loader.gif" alt="loader" style={{height: 100}} />
            </div>
        </div>
      </div>
    </div>
  </div>
        {/***Footer  */}
      </Fragment>
    )
    }
}
