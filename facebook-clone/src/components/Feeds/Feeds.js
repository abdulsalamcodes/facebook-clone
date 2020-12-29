import React from 'react'
import './Feeds.css'
import MessageSender from './MessageSender/MessageSender'
import Posts from './Posts/Posts'
import StoryReel from './StoryReel/StoryReel'

function Feeds() {
    return (
        <div className="feeds">
            <StoryReel />
            <MessageSender />
            <Posts />
        </div>
    )
}

export default Feeds
