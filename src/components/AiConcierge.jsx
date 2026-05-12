import React, { useState, useEffect, useRef } from 'react';
import { generateChatResponse } from '../lib/gemini.js';

const initialGreeting = "Hello! I'm the Corverse AI Concierge. Are you looking to hire top talent or find your next executive role?";

const AiConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'ai', text: initialGreeting }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = input.trim();
    const currentHistory = [...messages];
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);
    
    // Call Gemini API (pass the history without the new message since we pass it separately)
    const responseText = await generateChatResponse(currentHistory, userMessage);
    
    setMessages(prev => [...prev, { sender: 'ai', text: responseText }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        className={`ai-chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? '✕' : '✨'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window fade-in">
          <div className="ai-chat-header">
            <h3>Corverse Concierge</h3>
            <span className="ai-status">Online</span>
          </div>
          
          <div className="ai-chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                <div className="chat-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message ai">
                <div className="chat-bubble typing">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="ai-chat-footer" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={!input.trim()}>Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AiConcierge;
