import moment from 'moment';
import React from 'react'

const EachMail = ({thread}) => {
    console.log(thread, "thread")

    const formattedDate = moment(thread.sentAt).format('DD MMMM YYYY : hh:mmA');

  return (
    <div className='flex flex-col mb-1'>
        <div className='flex items-center mb-3'>
            <div className='w-full thread-date-div'></div>
            <span className='text-white thread-date text-xs'>{moment(thread.sentAt).format('DD MMMM')}</span>
            <div className='w-full thread-date-div'></div>
        </div>

        <div className='p-3 thread-container'>
            <div className='flex flex-col'>
                <div className='flex justify-between font-normal'>
                    <span className='text-white'>{thread.subject}</span>
                    <span className='text-gray-500'>{formattedDate}</span>
                </div>

                <div className='text-gray-400 text-xs mb-2 mt-2'>from :{thread.fromEmail}</div>
                <div className='text-gray-400 text-xs mb-4'>from :{thread.toEmail}</div>

            </div>

            <div className='mail-conv-body text-sm text-white font-normal' dangerouslySetInnerHTML={{ __html: thread.body }} />
        </div>
    </div>
  )
}

export default EachMail