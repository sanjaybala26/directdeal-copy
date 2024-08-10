// src/ChatPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatPage.css';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/chat');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await axios.post('http://localhost:8080/api/chat', {
        username,
        message: newMessage
      });

      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='chat-page'>
      <h1>Public Chat</h1>
      <div className='messages'>
        {messages.map(msg => (
          <div key={msg.id} className='message'>
            <strong>{msg.username}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <div className='input-container'>
        <input
          type='text'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder='Type your message...'
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
