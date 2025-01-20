import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import config from "../config.js"

const QuestionAnswer = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');
  const [message, setMessage] = useState('');

  const questions = [
    {
      id: 1,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'What is a component?',
      answer: 'A component is a reusable piece of code that manages its own state and renders UI.',
    },
    // Add more questions here
  ];

  const handleQuestionClick = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const handleChatClick = () => {
    setChatOpen(true);
  };

  const handleCallClick = () => {
    alert('Calling...');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(domain);

    const formData = {
      username,
      email,
      domain,
      message,
    };

    try {
      const response = await fetch(`${config.API_URI}/api/issues`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setUsername('');
        setEmail('');
        setMessage('');
        setChatOpen(false);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-blue-200 py-4">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h1>
          {questions.map((q) => (
            <div key={q.id} className="mb-4 border-b pb-4">
              <h3
                onClick={() => handleQuestionClick(q.id)}
                className="text-xl font-medium text-blue-600 cursor-pointer hover:text-blue-800 transition duration-300"
              >
                {q.question}
              </h3>
              {activeQuestion === q.id && (
                <div className="mt-4">
                  <p className="text-gray-700 mb-4">{q.answer}</p>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleChatClick}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Chat with us
                    </button>
                    <button
                      onClick={handleCallClick}
                      className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                    >
                      Call us
                    </button>
                  </div>
                  {chatOpen && (
                    <div className="mt-6 border-t pt-4">
                      <h4 className="text-lg font-semibold mb-2">Chat Box</h4>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">Name</label>
                          <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">Select Domain</label>
                          {/* <input
                            type="email"
                            value={email}
                            onChange={(e) => setDomain(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter domain corresponding to your issue"
                            required
                          /> */}
                          <select
                            defaultValue="Choose Option"
                            id="opt"
                            className="h-8 w-40 border-2 border-blue-400"
                            onChange={(e)=>{setDomain(e.target.value)}}
                          >
                            <option value="Choose Option" disabled>
                              Choose Option
                            </option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Robotics">Robotics</option>
                            <option value="Software">Software</option>
                            <option value="Electronics">Electronics/Electrical</option>
                            <option value="Other">Other</option>
                          </select>

                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">Message</label>
                          <textarea
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-lg"
                            placeholder="Ask your question..."
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionAnswer;
