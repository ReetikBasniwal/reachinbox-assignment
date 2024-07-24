import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';

const EachMail = ({thread}) => {

    const formattedDate = moment(thread.sentAt).format('DD MMMM YYYY : hh:mmA');
    const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);

  return (
    <div className='flex flex-col mb-1'>
        <div className='flex items-center mb-3'>
            <div className={`${isDarkMode ? 'dark-date-border' : 'light-date-border'} w-full thread-date-div`}></div>
            <span className={`dark:bg-dark-date dark:text-white text-slate-500 bg-slate-300 thread-date text-xs`}>{moment(thread.sentAt).format('DD MMMM')}</span>
            <div className={`${isDarkMode ? 'dark-date-border' : 'light-date-border'} w-full thread-date-div`}></div>
        </div>

        <div className={`p-3 thread-container mb-3 ${isDarkMode ? 'dark-thread-container dark-date-border' : 'bg-white light-date-border'}`}>
            <div className='flex flex-col'>
                <div className='flex justify-between font-normal text-sm'>
                    <span className='dark:text-white'>{thread.subject}</span>
                    <span className='text-gray-500'>{formattedDate}</span>
                </div>

                <div className='text-gray-400 text-xs mb-2 mt-2'>from: {thread.fromEmail}</div>
                <div className='text-gray-400 text-xs mb-4'>to: {thread.toEmail}</div>

            </div>

            <div className='mail-conv-body text-sm dark:text-white font-thin' dangerouslySetInnerHTML={{ __html: thread.body }} />
        </div>
    </div>
  )
}

export default EachMail