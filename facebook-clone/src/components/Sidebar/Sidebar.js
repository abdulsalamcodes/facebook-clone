import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow/SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from '../../contexts/UserContext';

function Sidebar() {
    const [{ user }] = useStateValue();
   

    return (
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL} />
            <SidebarRow title='Pages' Icon={EmojiFlagsIcon} />
            <SidebarRow title='People' Icon={PeopleIcon} />
            <SidebarRow title='Messenger' Icon={ChatIcon} />
            <SidebarRow title='MarketPlace' Icon={StorefrontIcon} />
            <SidebarRow title='Video' Icon={VideoLibraryIcon} />
            <SidebarRow title='See More' Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default Sidebar
