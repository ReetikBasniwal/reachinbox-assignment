import React from 'react'
import './mailconv.css'

const temp = {
    "id": 4,
    "fromName": "Shaw Adley",
    "fromEmail": "shaw@getmemeetings.com",
    "toName": "",
    "toEmail": "mitrajit2022@gmail.com",
    "cc": null,
    "bcc": null,
    "threadId": 2,
    "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
    "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
    "subject": "Test mail",
    "body": "<p>Test mail</p>",
    "isRead": true,
    "folder": "INBOX",
    "uid": 594,
    "sentAt": "2023-11-23T04:08:45.000Z",
    "archivedAt": null,
    "createdAt": "2023-11-23T07:38:46.000Z",
    "updatedAt": "2023-11-23T07:38:46.000Z",
    "deletedAt": null
}

const MailConv = ({mail}) => {
  return (
    <div className='mail-conv-container grow w-full'>
      <div className='flex mail-conv-header'>
        <div className='flex flex-col'>
            <span className='text-md text-white'>{temp.fromName}</span>
            <span className='text-slate-500 text-xs'>{temp.fromEmail}</span>
        </div>
      </div>
    </div>
  )
}

export default MailConv
