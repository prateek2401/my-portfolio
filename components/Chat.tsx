'use client';

import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface ChatMessage {
  text: string;
  sender: string;
  timestamp: string;
  delivered: boolean;
  sessionId: string;
}


export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [sessionId, setSessionId] = useState<string>('');
  const [userInfo, setUserInfo] = useState<{ name: string; email: string } | null>(null);

  // Add user info collection modal
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);

  useEffect(() => {
    // Show user info modal when chat is first opened
    if (isOpen && !userInfo && !showUserInfoModal) {
      setShowUserInfoModal(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    if (socket && sessionId) {
      socket.emit('closeChat', sessionId);
    }
    setIsOpen(false);
    setMessages([]);
    setSessionId('');
    setUserInfo(null);
    localStorage.removeItem('chat_session_id');
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && socket && sessionId && userInfo) {
      const newMessage: ChatMessage = {
        text: message,
        sender: userInfo.name,
        timestamp: new Date().toISOString(),
        delivered: false,
        sessionId: sessionId,
      };
  
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      socket.emit('sendMessage', newMessage);
      setMessage('');
    }
  };
  
  const handleUserInfoSubmit = (name: string, email: string) => {
    setUserInfo({ name, email });
    setShowUserInfoModal(false);
    
    // Send email notification with user info
    if (socket) {
      socket.emit('newUser', { name, email, sessionId });
    }
  };

  // Add user info modal JSX in the return statement
  // Add socket initialization in useEffect
  useEffect(() => {
    const newSocket = io( 'https://portfolio-chat-server-production.up.railway.app/', {
      withCredentials: true,
    });
    setSocket(newSocket);

    // Initialize session ID
    const urlSession = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('session') : null;
    const storedSession = typeof window !== 'undefined' ? localStorage.getItem('chat_session_id') : null;
    const newSessionId = urlSession || storedSession || crypto.randomUUID();
    
    setSessionId(newSessionId);
    localStorage.setItem('chat_session_id', newSessionId);

    // Listen for messages
    newSocket.on('message', (message: ChatMessage) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    // Listen for chat history
    newSocket.on('chatHistory', (history: ChatMessage[]) => {
      setMessages(history || []);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []); // Run only once on component mount
  
  // Update the user info modal JSX
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showUserInfoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl relative">
            <button 
              onClick={() => {
                setShowUserInfoModal(false);
                setIsOpen(false);
              }}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Please introduce yourself</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
              const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
              handleUserInfoSubmit(name, email);
            }}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Start Chat
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Update chat window layout */}
      {isOpen && (
        <div className="bg-white/10 backdrop-blur-lg w-80 h-96 rounded-lg shadow-xl border border-white/20 flex flex-col">
          <div className="p-4 border-b border-white/20 flex justify-between items-center">
            <h3 className="text-white font-medium">Chat with Prateek</h3>
            <button onClick={handleClose} className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${msg.sender === userInfo?.name ? 'flex justify-end' : 'flex justify-start'}`}
              >
                <div className={`max-w-[80%] ${msg.sender === userInfo?.name ? 'ml-auto' : ''}`}>
                  <div
                    className={`p-2 rounded-lg ${
                      msg.sender === userInfo?.name
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    <span className="inline-block">{msg.text}</span>
                  </div>
                  <div className={`text-[10px] text-gray-400 mt-1 ${msg.sender === userInfo?.name ? 'text-right' : 'text-left'}`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-white/20">
            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-white/90 text-gray-900 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
}
