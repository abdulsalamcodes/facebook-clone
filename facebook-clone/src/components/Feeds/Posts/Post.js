import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Post.css'
function Post({ image, timestamp, profilePic, username, message }) {
    const [comment, setComment] = useState(false);
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__userInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__message">
                <p >{message}</p>
            </div>
            <div className="post__image">
                {image && <img src={image} alt={`Post by: ${username}`} />}
            </div>
            {comment && <div className="post__comment">
                <p>This is a comment</p>
            </div>}
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className={`${comment && "active"} post__option`} onClick={() => setComment(!comment)}>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>

            </div>

        </div>
    )
}

export default Post
