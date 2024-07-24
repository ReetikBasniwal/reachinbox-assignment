import React from 'react';
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
  const { user } = useSelector((state) => state.auth);
  const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);

  return (
    <div className={`sidebar ${isDarkMode ? 'darkSidebar border-dark' :'light border-light'} light border-right`}>
        <MailIcon className="" />

        <nav className='nav-items-container'>
            <div className='nav-icon-div'><HomeIcon className="nav-icon" /></div>
            <div className='nav-icon-div'><UserIcon className="nav-icon" /></div>
            <div className="nav-icon-div"><EnvelopeIcon className="nav-icon" /></div>
            <div className="nav-icon-div"><TelegramIcon className="nav-icon" /></div>
            <div className="nav-icon-div"><InboxIcon className="nav-icon" /></div>


        </nav>

        <div className='d-flex align-items-center justify-content-center'>
            <dir className={`avatar dark:bg-white bg-black p-0`}>
                <span className='dark:text-black text-white'>{user.firstName[0]?.toUpperCase() +user?.lastName[0]?.toUpperCase()}</span>
            </dir>
        </div>
    </div>
  );
};

export default Sidebar;