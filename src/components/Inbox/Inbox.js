import React, { useEffect } from 'react'
import './allinbox.css';
import { useDispatch, useSelector } from 'react-redux';
import MailPreview from '../MailPreview/MailPreview';
import { FiChevronDown } from 'react-icons/fi';
import { oneboxAction } from '../../redux/reducers/oneboxSlice';

const temp = [
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
    },
    {
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
    },
    {
        "id": 5,
        "fromName": "Jane Doe",
        "fromEmail": "jane@company.com",
        "toName": "",
        "toEmail": "mitrajit2022@gmail.com",
        "cc": null,
        "bcc": null,
        "threadId": 3,
        "messageId": "<b7ecFng2bc7e56d39847759d4e3f7g3d@company.com>",
        "inReplyTo": null,
        "references": null,
        "subject": "Meeting Agenda for Tomorrow",
        "body": "<p>Hi Mitrajit,</p><p>Please find the agenda for tomorrow's meeting attached.</p><p>Best,<br/>Jane Doe</p>",
        "isRead": false,
        "folder": "INBOX",
        "uid": 600,
        "sentAt": "2023-11-24T10:15:30.000Z",
        "archivedAt": null,
        "createdAt": "2023-11-24T10:30:00.000Z",
        "updatedAt": "2023-11-24T10:30:00.000Z",
        "deletedAt": null
    },
    {
        "id": 6,
        "fromName": "John Smith",
        "fromEmail": "john@anothercompany.com",
        "toName": "",
        "toEmail": "mitrajit2022@gmail.com",
        "cc": null,
        "bcc": null,
        "threadId": 4,
        "messageId": "<c8fdFth3cd8e67d4a98760a5e4g8h4e@anothercompany.com>",
        "inReplyTo": null,
        "references": null,
        "subject": "Project Update",
        "body": "<p>Hi Mitrajit,</p><p>Here's the latest update on the project. Let me know if you have any questions.</p><p>Thanks,<br/>John Smith</p>",
        "isRead": true,
        "folder": "INBOX",
        "uid": 601,
        "sentAt": "2023-11-24T12:00:00.000Z",
        "archivedAt": null,
        "createdAt": "2023-11-24T12:05:00.000Z",
        "updatedAt": "2023-11-24T12:05:00.000Z",
        "deletedAt": null
    },
    {
        "id": 7,
        "fromName": "Alice Johnson",
        "fromEmail": "alice@business.com",
        "toName": "",
        "toEmail": "mitrajit2022@gmail.com",
        "cc": null,
        "bcc": null,
        "threadId": 5,
        "messageId": "<d9geGuh4de9f78e5b09871b6f5h9i5f@business.com>",
        "inReplyTo": null,
        "references": null,
        "subject": "Invoice for Services Rendered",
        "body": "<p>Hi Mitrajit,</p><p>Attached is the invoice for the services rendered last month. Please let me know if you have any questions.</p><p>Regards,<br/>Alice Johnson</p>",
        "isRead": false,
        "folder": "INBOX",
        "uid": 602,
        "sentAt": "2023-11-25T09:30:00.000Z",
        "archivedAt": null,
        "createdAt": "2023-11-25T09:45:00.000Z",
        "updatedAt": "2023-11-25T09:45:00.000Z",
        "deletedAt": null
    },
    {
        "id": 8,
        "fromName": "Michael Brown",
        "fromEmail": "michael@corporate.com",
        "toName": "",
        "toEmail": "mitrajit2022@gmail.com",
        "cc": null,
        "bcc": null,
        "threadId": 6,
        "messageId": "<e1hfHvi5ef0g89f6c10982c7g6i0j6g@corporate.com>",
        "inReplyTo": null,
        "references": null,
        "subject": "Weekly Report",
        "body": "<p>Hi Mitrajit,</p><p>Here is this week's report. Please review and provide your feedback.</p><p>Best regards,<br/>Michael Brown</p>",
        "isRead": true,
        "folder": "INBOX",
        "uid": 603,
        "sentAt": "2023-11-25T11:00:00.000Z",
        "archivedAt": null,
        "createdAt": "2023-11-25T11:15:00.000Z",
        "updatedAt": "2023-11-25T11:15:00.000Z",
        "deletedAt": null
    },
    {
        "id": 9,
        "fromName": "Emily Clark",
        "fromEmail": "emily@designstudio.com",
        "toName": "",
        "toEmail": "mitrajit2022@gmail.com",
        "cc": null,
        "bcc": null,
        "threadId": 7,
        "messageId": "<f2igIwj6gf1h90g7d21093d8h7j1k7h@designstudio.com>",
        "inReplyTo": null,
        "references": null,
        "subject": "Design Review Meeting",
        "body": "<p>Hi Mitrajit,</p><p>Can we schedule a meeting to review the new design concepts?</p><p>Best,<br/>Emily Clark</p>",
        "isRead": false,
        "folder": "INBOX",
        "uid": 604,
        "sentAt": "2023-11-26T09:00:00.000Z",
        "archivedAt": null,
        "createdAt": "2023-11-26T09:15:00.000Z",
        "updatedAt": "2023-11-26T09:15:00.000Z",
        "deletedAt": null
    },
    {
        "id": 10,
        "fromName": "David Wilson",
        "fromEmail": "david@techworld.com",
        "toName": "",
        "toEmail": "mitrajit2022@gmail.com",
        "cc": null,
        "bcc": null,
        "threadId": 8,
        "messageId": "<g3jhJxk7hg2i01h8e32104e9i8k2l8i@techworld.com>",
        "inReplyTo": null,
        "references": null,
        "subject": "Tech Conference Invitation",
        "body": "<p>Hi Mitrajit,</p><p>You're invited to speak at the upcoming Tech Conference. Please find the details attached.</p><p>Regards,<br/>David Wilson</p>",
        "isRead": true,
        "folder": "INBOX",
        "uid": 605,
        "sentAt": "2023-11-26T11:30:00.000Z",
        "archivedAt": null,
        "createdAt": "2023-11-26T11:45:00.000Z",
        "updatedAt": "2023-11-26T11:45:00.000Z",
        "deletedAt": null
    },
    {
        "id": 11,
        "fromName": "Sophia Martinez",
        "fromEmail": "sophia@marketingguru.com",
        "toName": "",
        "toEmail": "mitrajit2022@gmail.com",
        "cc": null,
        "bcc": null,
        "threadId": 9,
        "messageId": "<h4kiKyL8ih3j12j9f43215f0j9l3m9j@marketingguru.com>",
        "inReplyTo": null,
        "references": null,
        "subject": "Marketing Strategy Discussion",
        "body": "<p>Hi Mitrajit,</p><p>I would like to discuss the new marketing strategy with you. Let me know when you're available.</p><p>Thanks,<br/>Sophia Martinez</p>",
        "isRead": false,
        "folder": "INBOX",
        "uid": 606,
        "sentAt": "2023-11-27T08:45:00.000Z",
        "archivedAt": null,
        "createdAt": "2023-11-27T09:00:00.000Z",
        "updatedAt": "2023-11-27T09:00:00.000Z",
        "deletedAt": null
    },
    {
        "id": 12,
        "fromName": "Chris Lee",
        "fromEmail": "chris@softwarehouse.com",
        "toName": "",
        "toEmail": "mitrajit2022@gmail.com",
        "cc": null,
        "bcc": null,
        "threadId": 10,
        "messageId": "<i5liLzM9ji4k23k0g54326g1k0n4o0k@softwarehouse.com>",
        "inReplyTo": null,
        "references": null,
        "subject": "Code Review Feedback",
        "body": "<p>Hi Mitrajit,</p><p>Here is the feedback on the latest code review. Please go through it and make the necessary changes.</p><p>Regards,<br/>Chris Lee</p>",
        "isRead": true,
        "folder": "INBOX",
        "uid": 607,
        "sentAt": "2023-11-27T10:30:00.000Z",
        "archivedAt": null,
        "createdAt": "2023-11-27T10:45:00.000Z",
        "updatedAt": "2023-11-27T10:45:00.000Z",
        "deletedAt": null
    },
    {
        "id": 13,
        "fromName": "Emma Johnson",
        "fromEmail": "emma@financialservices.com",
        "toName": "",
        "toEmail": "mitrajit2022@gmail.com",
        "cc": null,
        "bcc": null,
        "threadId": 11,
        "messageId": "<j6mjMzN0kj5l34l1h65437h2l1o5p1l@financialservices.com>",
        "inReplyTo": null,
        "references": null,
        "subject": "Monthly Financial Report",
        "body": "<p>Hi Mitrajit,</p><p>Attached is the financial report for the month. Please review and let me know if you have any questions.</p><p>Best,<br/>Emma Johnson</p>",
        "isRead": false,
        "folder": "INBOX",
        "uid": 608,
        "sentAt": "2023-11-27T14:00:00.000Z",
        "archivedAt": null,
        "createdAt": "2023-11-27T14:15:00.000Z",
        "updatedAt": "2023-11-27T14:15:00.000Z",
        "deletedAt": null
    }
]

const Inbox = () => {

    const mails = useSelector(state => state.oneboxReducer.mails);
    const dispatch = useDispatch();

    useEffect(() => {
        if(mails.length > 0){
            dispatch(oneboxAction.setSelectedMail(mails[0]));
        }
    },[mails])
    
  return (
    <div className='flex-none inbox-container'>
        <div className='flex flex-col'>
            <div className='pl-2 mb-1'>
                <span className='allinbox-text text-xl font-medium'>
                    All Inbox(s)
                </span>
            </div>

            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center'>
                    <span className='new-msg-count rounded-full px-2 py-1 text-xs mr-2'>26</span>
                    <span className='text-white text-sm'>New Replies</span>
                </div>
                <div className='flex items-center text-gray-400'>
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
