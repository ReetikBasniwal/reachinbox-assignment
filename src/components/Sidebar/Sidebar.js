import React, { useState }  from 'react';
import './sidebar.css';
import { useSelector } from 'react-redux';
import { ReactComponent as MailIcon } from '../../assets/icons/Logo12.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/Home.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/Vector.svg';
import { ReactComponent as EnvelopeIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/dm.svg';
import { ReactComponent as InboxIcon } from '../../assets/icons/inbox.svg';
// import { ReactComponent as GridIcon } from '../../assets/icons/Vector.svg';
// import { ReactComponent as NotificationIcon } from '../../assets/icons/Vector.svg';
// import { ReactComponent as StatsIcon } from './icons/stats.svg';
// import { ReactComponent as UserAvatar } from './icons/user-avatar.svg';

const Sidebar = () => {

  const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);
  const { user } = useSelector((state) => state.auth);

  console.log(user, "user in side bar")

//   const toggleTheme = () => {
//     // setDarkMode(!darkMode);
//   };

  return (
    <div className={`sidebar ${isDarkMode ? 'dark' : 'light'} border-right`}>
        <MailIcon className="" />

        <nav className='nav-items-container'>
            <div className='nav-icon-div'><HomeIcon className="nav-icon" /></div>
            <div className='nav-icon-div'><UserIcon className="nav-icon" /></div>
            <div className="nav-icon-div"><EnvelopeIcon className="nav-icon" /></div>
            <div className="nav-icon-div"><TelegramIcon className="nav-icon" /></div>
            <div className="nav-icon-div"><InboxIcon className="nav-icon" /></div>


        </nav>

        <div className='d-flex align-items-center justify-content-center'>
            <dir className={`avatar bg-white text-black p-0`}>
                <span className=''>{user.firstName[0]?.toUpperCase() +user?.lastName[0]?.toUpperCase()}</span>
            </dir>
        </div>
    </div>
  );
};

export default Sidebar;