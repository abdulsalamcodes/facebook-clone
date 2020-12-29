import { Avatar } from '@material-ui/core'
import VideoCamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import React from 'react'
import './MessageSender.css'
import MessageSenderOption from './MessageSenderOption';
import db from '../../../firebase';
import firebase from 'firebase'
// custom Hook
import useInput from '../../../hooks/useInput';
import { useStateValue } from '../../../contexts/UserContext';


function MessageSender() {
    const [{ user }] = useStateValue();
    const [messageText, bindMessageText, resetMessageText] = useInput('');
    const [imageUrl, bindUrl, resetUrl] = useInput('');

    const displayName = user.displayName.split(' ')[0];
    console.log(displayName)

    function handleSubmit(e) {
        e.preventDefault();

        db.collection("posts").add({
            message: messageText,
            profilePic: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: imageUrl,
            username: user.displayName
        })

        resetUrl('')
        resetMessageText('');
    }

    return (

        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form onSubmit={handleSubmit}>
                    <input
                        className="messengerSender__input"
                        type="text"
                        placeholder={`What is on your mind, ${displayName} ?`}
                        required value={messageText} {...bindMessageText}
                    />

                    <input
                        className="messengerSender__url"
                        type="url"
                        placeholder="Image Url (Optional)"
                        value={imageUrl} {...bindUrl}

                    />
                    <button className="messengerSender__button--hidden" type="submit">Hidden Button</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <MessageSenderOption Icon={VideoCamIcon} color="red" text="Live Video" />
                <MessageSenderOption Icon={PhotoLibraryIcon} color="green" text="Photo/Video" />
                <MessageSenderOption Icon={InsertEmoticonIcon} color="orange" text="Feeling/Activity" />
            </div>
        </div>
    )
}

export default MessageSender
