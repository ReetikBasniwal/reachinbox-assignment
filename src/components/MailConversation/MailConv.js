import React, { useEffect, useState } from 'react'
import './mailconv.css'
import EachMail from './EachMail'
import EmailReply from '../../modals/EmailReply/EmailReply'
import { useSelector } from 'react-redux'

const messages = [
    {
      "id": 2,
      "fromName": "Mitrajit Chandra",
      "fromEmail": "mitrajit2022@gmail.com",
      "toName": "",
      "toEmail": "shaw@getmemeetings.com",
      "cc": null,
      "bcc": null,
      "threadId": 1,
      "messageId": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "inReplyTo": null,
      "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "subject": "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      "body": "<p>How are you Shaw?</p><p>Thanks for reaching out over our web chat.</p><p>How can I help you with your project?</p><p>Please let me know if you need anything else.</p><p>Regards,<br/>Mitrajit Chandra</p><p>7ZG2ZTV 6KG634E</p>",
      "isRead": true,
      "folder": "INBOX",
      "uid": 52,
      "sentAt": "2023-11-21T00:39:19.000Z",
      "archivedAt": null,
      "createdAt": "2023-11-23T07:38:46.000Z",
      "updatedAt": "2023-11-23T07:38:46.000Z",
      "deletedAt": null
    },
    {
      "id": 3,
      "fromName": "Shaw Adley",
      "fromEmail": "shaw@getmemeetings.com",
      "toName": "",
      "toEmail": "mitrajit2022@gmail.com",
      "cc": null,
      "bcc": null,
      "threadId": 1,
      "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "subject": "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      "body": "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
      "isRead": true,
      "folder": "INBOX",
      "uid": 594,
      "sentAt": "2023-11-23T04:08:45.000Z",
      "archivedAt": null,
      "createdAt": "2023-11-23T07:38:46.000Z",
      "updatedAt": "2023-11-23T07:38:46.000Z",
      "deletedAt": null
    }
  ]

const MailConv = ({mail}) => {

  const [showWriteMail, setShowWriteMail] = useState(false);

  const selectedMail = useSelector(state => state.oneboxReducer.selectedMail);
  const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'r' || event.key === 'R') {
        setShowWriteMail(!showWriteMail);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if(!selectedMail) return;

  return (
    <div className={`mail-conv-container grow w-full relative dark:bg-black ${isDarkMode ? 'border-dark' : 'border-light'}`}>
      <div className={`flex mail-conv-header ${isDarkMode ? 'border-dark' : 'border-light'}`}>
        <div className='flex flex-col'>
            <span className='text-md text-black dark:text-white'>{selectedMail.fromName}</span>
            <span className='text-slate-600 text-xs'>{selectedMail.fromEmail}</span>
        </div>
      </div>

      <div className={`p-4 overflow-y-auto h-full bg-red ${isDarkMode ? '' : 'light-bg'}`}>
        {messages.map((msg) => (
          <EachMail thread={msg} key={msg.id}/>
          )
        )}
      </div>

      <button 
        type="button" 
        className="reply-btn text-sm font-normal text-white"
        onClick={() => setShowWriteMail(true)}
      >Reply</button>
      {showWriteMail && <EmailReply isOpen={showWriteMail} closeModal={() => { setShowWriteMail(false); console.log("calling")}} info={selectedMail}/>}
    </div>
  )
}

export default MailConv
