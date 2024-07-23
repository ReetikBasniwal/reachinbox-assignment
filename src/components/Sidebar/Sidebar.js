import React from 'react';
import './sidebar.css';
import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { ReactComponent as MailIcon } from './icons/mail.svg';
// import { ReactComponent as HomeIcon } from './icons/home.svg';
// import { ReactComponent as UserIcon } from './icons/user.svg';
// import { ReactComponent as EnvelopeIcon } from './icons/envelope.svg';
// import { ReactComponent as TelegramIcon } from './icons/telegram.svg';
// import { ReactComponent as GridIcon } from './icons/grid.svg';
// import { ReactComponent as NotificationIcon } from './icons/notification.svg';
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
      {/* <MailIcon className="icon" />
      <HomeIcon className="icon" />
      <UserIcon className="icon" />
      <EnvelopeIcon className="icon" />
      <TelegramIcon className="icon" />
      <GridIcon className="icon" />
      <NotificationIcon className="icon" />
      <StatsIcon className="icon" />
      <UserAvatar className="icon" /> */}
    </div>
  );
};

export default Sidebar;