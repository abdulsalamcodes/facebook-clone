import React from 'react'

function MessageSenderOption({text, color, Icon}) {
    return (
        <div className="messageSender__option">
        <Icon style={{ color: color }} />
        <span>{text}</span>
    </div>
    )
}

export default MessageSenderOption
