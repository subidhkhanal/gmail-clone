import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar ,IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header(){
    return (
        <div className="header">
            <div className ="header_left">
               <IconButton>
               <MenuIcon />
               </ IconButton>
               <img src="https://i.pinimg.com/564x/ae/47/fa/ae47fa9a8fd263aa364018517020552d.jpg" alt=""/>
            </div>

            <div className="header_middle">
               <SearchIcon />
               <input placeholder="Search Mail" type="text"/>
               <ArrowDropDownIcon className="header_inputCaret"/>
            </div>

            <div className ="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />

                </IconButton>
                <Avatar />


            </div>

        </div>
);
}

export default Header;