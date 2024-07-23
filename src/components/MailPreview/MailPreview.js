import React from 'react'
import './mailpreview.css';
import DOMPurify from 'dompurify';

const MailPreview = ({mail}) => {

    console.log(mail, "each mail")

    const sanitizedHtml = DOMPurify.sanitize(mail.body);

  return (
    <div className='flex flex-col border-t mail-prev'>
      <span className='text-white'>{mail.fromEmail}</span>

      <div className={`text-white text-xs truncate ${mail.isRead ? 'text-slate-500' : ''}`} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />

    </div>
  )
}

export default MailPreview
