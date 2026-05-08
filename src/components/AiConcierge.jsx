import React, { useState, useEffect, useRef } from 'react';

const mockResponses = [
  "Hello! I'm the Corverse AI Concierge. Are you looking to hire top talent or find your next executive role?",
  "That sounds like an exciting direction. We specialize in executive search and specialized technical roles. Would you like me to connect you with one of our senior recruiters?",
  "I've noted your interest. A specialist will review this and reach out shortly. In the meantime, feel free to explore our Services page for more details on our process."
];

const AiConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'ai', text: mockResponses[0] }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);
    
    // Mock AI delay and response
    setTimeout(() => {
      const nextResponseIndex = Math.min(messages.length, mockResponses.length - 1);
      setMessages(prev => [...prev, { sender: 'ai', text: mockResponses[nextResponseIndex] || mockResponses[2] }]);
      setIsTyping(false);
    }, 1500);
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
