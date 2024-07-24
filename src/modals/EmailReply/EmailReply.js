import React from 'react';
import './EmailReplyModal.css';
import { useSelector } from 'react-redux';

const EmailReply = ({ isOpen, closeModal, info }) => {
    console.log(info, "user")

  const { user } = useSelector((state) => state.auth);


  if(!isOpen || !user) return;

  return (
    <div className="email-reply-modal">
        <div className="modal-header font-normal">
            <span className='text-sm text-slate-400'>Reply</span>
            <button className="close-button" onClick={closeModal}>&times;</button>
        </div>
        <form className='text-sm'>
            <div className="form-group">
                <label className='font-thin'>To :</label>
                <input className='' type="email" defaultValue={info.fromEmail} />
            </div>
            <div className="form-group">
                <label className='font-thin'>From :</label>
                <input className='' type="email" defaultValue={user.email} disabled />
            </div>
            <div className="form-group">
                <label className='font-thin'>Subject :</label>
                <input className='' type="text" />
            </div>
            <div className="form-group font-normal">
                <textarea placeholder="Hi Jeanne," />
            </div>
            <div className="modal-footer">
                <button type="button" className="send-button text-sm font-normal">Send</button>
                {/* <div className="additional-options">
                    <button type="button">Variables</button>
                    <button type="button">Preview Email</button>
                    <button type="button">A:</button>
                    <button type="button">🙂</button>
                    <button type="button">📎</button>
                    <button type="button">🖼️</button>
                    <button type="button">❯</button>
                </div> */}
            </div>
        </form>
    </div>
  )
}

export default EmailReply