import React from 'react'
import './mailpreview.css';
import DOMPurify from 'dompurify';
import { FiTag } from 'react-icons/fi';

const MailPreview = ({mail}) => {

    const sanitizedHtml = DOMPurify.sanitize(mail.body);

    const getStatusColor = (status) => {
      switch(status.toLowerCase()) {
          case 'interested': return 'bg-green-500';
          case 'closed': return 'bg-red-500';
          case 'meeting booked': return 'bg-purple-500';
          case 'meeting completed': return 'bg-yellow-500';
          default: return 'bg-gray-500';
      }
    };

  return (
    <div className='mail-prev-container flex flex-col py-3 px-2'>
      {/* <span className='text-white mt-1'>{mail.fromEmail}</span> */}
      <div className='flex justify-between items-center mb-1'>
                <span className='text-white font-semibold'>{mail.fromEmail}</span>
                <span className='text-gray-400 text-sm'>Mar 7</span>
            </div>

      {/* <div className={`text-xs truncate ${mail.isRead ? 'text-slate-500' : 'text-white'}`} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} /> */}
      <div className={`text-sm truncate ${mail.isRead ? 'text-gray-400' : 'text-white'}`} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </div>
  )
}

export default MailPreview
