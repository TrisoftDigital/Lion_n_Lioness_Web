import React from 'react' 
import PaymentIcon from '@material-ui/icons/Payment';
import HomeIcon from '@material-ui/icons/Home';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import Images from "../assets/default-profile.png"; 
import SendIcon from '@material-ui/icons/Send';
import NavBar from './NavBar';
 
export default function Posts() {
  return (
      <div className='right-panel-wrapper'>
        {/* <NavBar /> */}
    <div className='posts-wrapper'>
        <div className='posts-left-side'>
         <div className='info-wrapper'>
            <h2>Info</h2>
            <div className='info-details'>
            <p><PaymentIcon /> <span>FREE SUBSCRIPTION</span> </p>
            <p><HomeIcon /> <span>LIVE</span> </p>
            <p><WatchLaterIcon /> <span> Joined 2024-09-05 09:04:45</span> </p>
            </div>
            <button>More Info</button>
            <button>Change Password</button>
         </div>
         <div className='my-photos-wrapper'>
         <h2>Photos</h2>
         <div className='my-photos'>
            <div className='img-box'>
                <img src={Images} alt="" />
            </div>
            <div className='img-box'>
                <img src={Images} alt="" />
            </div>
            <div className='img-box'>
                <img src={Images} alt="" />
            </div>
            <div className='img-box'>
                <img src={Images} alt="" />
            </div>
         </div>
         </div>
         <div className='my-friends-wrapper'>
         <h2>Friends</h2>
         <div className='my-friends'>
            <div className='img-box'>
                <img src={Images} alt="" />
            </div>
            <div className='img-box'>
                <img src={Images} alt="" />
            </div>
            <div className='img-box'>
                <img src={Images} alt="" />
            </div>
            <div className='img-box'>
                <img src={Images} alt="" />
            </div>
         </div>
         </div>
          </div>
          <div className="posts-right-side">
           <div  className='upload-post-wrapper'>
            <h3>Upload Post</h3>
            <input type="file" name="" id="" />
            <div className='post-title-box'>
            <div className="post-image">
                <img src={Images} alt="" />
            </div>
            <input type="text" className='post-title' placeholder='Enter post title' />
            </div>
            <button className='post-btn btn'>POST</button>
           </div>

           <div className='post-uploaded'>
            <div className='post-uplaoded-details'>
            <p>Capturing moments is my passion. When I'm not behind the camera, I love spending time outdoors or cooking up something new in the kitchen.
            </p>
            <span>1 month</span>
            <DeleteIcon />
            </div>
            <div className="uploaded-post-img">
            <img src={Images} alt="" />
            </div>
            <div className='post-uploaded-btns'>
                <button><ThumbUpAltIcon /> Like</button>
                <button><ModeCommentIcon />Comments</button>
            </div>
            <a href=''> View All </a>
            <div className='comment-wrapper'>
            <input type="text" className='comment-box'  />
            <div className="send-btn">
                <button><SendIcon /> </button>
            </div>
            </div>
            <div className='post-title-box'>
            <div className="post-image">
                <img src={Images} alt="" />
            </div>
            <input type="text" className='post-title'   />
            </div>
            <p className='post-upload-time'>2 weeks ago</p>
           </div>
          </div>

    </div>
    </div>
  )
}
