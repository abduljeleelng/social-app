import React, { Fragment, Component } from 'react';
import profileIcon from '../img/profileIcon.png'
import { profilePhoto } from '../../timeline/api';
import { Link } from 'react-router-dom';
import { photoAPI, like, unlike } from '../api';
import { Comment } from '.';
import { isAuthenticated } from '../../../auth';

const timeAgo = (prevDate) => {
  const diff = Number(new Date()) - prevDate;
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;
  switch (true) {
    case diff < minute:
      const seconds = Math.round(diff / 1000);
      return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`
      case diff < hour:
        return Math.round(diff / minute) + ' minutes ago';
      case diff < day:
        return Math.round(diff / hour) + ' hours ago';
      case diff < month:
        return Math.round(diff / day) + ' days ago';
      case diff < year:
        return Math.round(diff / month) + ' months ago';
      case diff > year:
        return Math.round(diff / year) + ' years ago';
      default:
        return "";
    }
  };
   // console.log(timeAgo(new Date("Thu Oct 25 2018").getTime()));

export default class Post extends Component {
  const [likee, setLike] = useState(false);
  const [likes,setLikes] = useState(0);



  likeToggle = (postId) => {
    //if (!isAuthenticated()) {this.setState({ redirectToSignin: true });return false;}
    let callApi = likee ? unlike : like;
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;
    callApi(userId, token, postId).then(data=> {
      if (data.error) {
          console.log(data.error);
      } else {
        console.log(JSON.stringify(data))
        //setLike(!likee);
        setLikes(data.likes.length);
      }
    });
  };

  render(){

  }
}
