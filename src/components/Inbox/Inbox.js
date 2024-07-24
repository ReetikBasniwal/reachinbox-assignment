import React, { useEffect, useState } from 'react'
import './allinbox.css';
import { useDispatch, useSelector } from 'react-redux';
import MailPreview from '../MailPreview/MailPreview';
import { FiChevronDown } from 'react-icons/fi';
import { oneboxAction } from '../../redux/reducers/oneboxSlice';

const Inbox = () => {

    const [unReadCount, setUnReadCount] = useState(0);

    const mails = useSelector(state => state.oneboxReducer.mails);
    const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);
    const dispatch = useDispatch();

    useEffect(() => {
        if(mails.length > 0){
            let count = 0;
            mails.forEach(mail => {
                if(!mail.isRead) count++;
            })
            setUnReadCount(count);
            dispatch(oneboxAction.setSelectedMail(mails[0]));
        }
    },[mails,dispatch])
    
  return (
    <div className={`flex-none inbox-container dark:bg-black ${isDarkMode ? 'border-dark' : 'border-light'}`}>
        <div className='flex flex-col'>
            <div className='pl-2 mb-1'>
                <span className='allinbox-text text-xl font-medium'>
                    All Inbox(s)
                </span>
            </div>

            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center'>
                    <span className={`new-msg-count ${isDarkMode ? 'dark-count' : 'light-count'} rounded-full px-2 py-1 text-xs mr-2`}>{unReadCount}</span>
                    <span className='dark:text-white text-sm'>New Replies</span>
                </div>
                <div className='dark:text-gray-400 flex items-center'>
                    <span>Newest</span>
                    <FiChevronDown className='ml-1' />
                </div>
            </div>
        </div>

        <div className='space-y-4 overflow-y-auto'>
            { mails.length > 0 && mails.map((eachMail) => 
                <MailPreview mail={eachMail} key={eachMail.id} />
            )}
        </div>
    </div>
  )
}

export default Inbox
