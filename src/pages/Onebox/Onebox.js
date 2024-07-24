import React, { useEffect } from 'react';
import './onebox.css'
import { useSelector } from 'react-redux';
import TopBar from '../../components/Topbar/Topbar';
import Inbox from '../../components/Inbox/Inbox';
import axios from 'axios';
import { BASE_URL } from '../../config/global_config';
import MailConv from '../../components/MailConversation/MailConv';
import SenderDetail from '../../components/SenderDetail/SenderDetail';

function Onebox() {
  const mails = useSelector(state => state.oneboxReducer.mails);
  const { user } = useSelector((state) => state.auth);
  const authToken = useSelector(state => state.auth.token);

  useEffect(() => {
    // if(mails.length === 0 && authToken?.length > 0){
      const fetchMails = async () => {
        try {
          const url = `${BASE_URL}/onebox/list`;
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          console.log(response.data, 'res mails');
          // Dispatch an action to store mails in the redux store
          // dispatch({ type: 'SET_MAILS', payload: response.data });
        } catch (error) {
          console.error('Error fetching mails:', error.message);
        }
      };
      fetchMails();
    // }
    
  }, [mails, authToken])

  if(!user || !authToken) return;

  return (
    <div className="onebox">
      <TopBar />

      <div className='onebox-container'>
        <Inbox/>
        <MailConv />
        <SenderDetail />
      </div>
    </div>
  );
}

export default Onebox;