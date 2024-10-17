import React from 'react' 
import PaymentIcon from '@material-ui/icons/Payment';
import HomeIcon from '@material-ui/icons/Home';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

export default function Posts() {
  return (
    <div className='posts-wrapper'>
         <div className='info-wrapper'>
            <h2>Info</h2>
            <p><PaymentIcon /> <span>FREE SUBSCRIPTION</span> </p>
            <p><PaymentIcon /> <span>LIVE</span> </p>
            <p><PaymentIcon /> <span> Joined 2024-09-05 09:04:45</span> </p>
         </div>


    </div>
  )
}
