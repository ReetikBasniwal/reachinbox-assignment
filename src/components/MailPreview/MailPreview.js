import React from 'react'
import './mailpreview.css';
import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from 'react-redux';
import { oneboxAction } from '../../redux/reducers/oneboxSlice';

const MailPreview = ({mail}) => {

    const sanitizedHtml = DOMPurify.sanitize(mail.body);
    const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);

    const dispatch = useDispatch();

    const selectMail = () => {
      dispatch(oneboxAction.setSelectedMail(mail));
    }

  return (
    <div className={`mail-prev-container flex flex-col py-3 px-2 cursor-pointer ${isDarkMode ? 'border-dark' : 'border-light'}`} onClick={selectMail}>
      {/* <span className='text-white mt-1'>{mail.fromEmail}</span> */}
      <div className='flex justify-between items-center mb-1'>
        <span className='dark:text-white font-semibold'>{mail.fromEmail}</span>
        <span className='text-gray-400 text-sm'>Mar 7</span>
      </div>

      {/* <div className={`text-xs truncate ${mail.isRead ? 'text-slate-500' : 'text-white'}`} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} /> */}
      <div className={`text-sm truncate ${mail.isRead ? 'text-gray-400' : 'dark:text-white'}`} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </div>
  )
}

export default MailPreview
