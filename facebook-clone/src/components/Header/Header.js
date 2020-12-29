import React from 'react'
import './Header.css'
import { Search } from 'react-feather';
import logo from '../../assets/facebook-logo.svg';
// import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import { useStateValue } from '../../contexts/UserContext';

function Header() {
    const [{ user }] = useStateValue();
    // get the first name only.
    const displayName = user.displayName.split(' ')[0];
    console.log(displayName);

    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt=""  />
                <div className="header__input">
                    <Search size={20} color="#606770" />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{displayName}</h4>
                </div>

                <IconButton className="header__icon">
                    <AddIcon />
                </IconButton>
                <IconButton className="header__icon">
                    <ForumIcon />
                </IconButton>

                <IconButton className="header__icon">
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton className="header__icon">
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
