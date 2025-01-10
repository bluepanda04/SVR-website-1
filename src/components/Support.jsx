import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const QuestionAnswer = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is React?Lorem ipsum dolor sit amet, consectetur adisicing elit. Totam doloribus adipisci itaque error, dolore eos!',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'What is a component?',
      answer: 'A component is a reusable piece of code that manages its own state and renders UI.',
    },
    {
        id: 3,
        question: 'What is React?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tot doloribus adipisci itaque error, dolore eos!',
        answer: 'React is a JavaScript library for building user interfaces.',
      },
      {
        id: 4,
        question: 'What is React?Lorem ipsum dolor sit  consectetur adipisicing elit. Totam doloribus adipisci itaque error, dolore eos!',
        answer: 'React is a JavaScript library for building user interfaces.',
      },
      {
        id: 5,
        question: 'What is React?Lorem ipsum dolor sit  consectetur adipisicing elit. Totam doloribus adipisci itaque error, dolore eos!',
        answer: 'React is a JavaScript library for building user interfaces.',
      },
      {
        id: 6,
        question: 'What is React?Lorem ipsum dolor sit  consectetur adipisicing elit. Totam doloribus adipisci itaque error, dolore eos!',
        answer: 'React is a JavaScript library for building user interfaces.',
      },
      {
        id: 7,
        question: 'What is React?Lorem ipsum dolor sit  consectetur adipisicing elit. Totam doloribus adipisci itaque error, dolore eos!',
        answer: 'React is a JavaScript library for building user interfaces.',
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

  return (
    <>
    <Header/>
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
                    <textarea
                      rows="4"
                      cols="50"
                      className="w-full p-4 border border-gray-300 rounded-lg"
                      placeholder="Ask your question..."
                    />
                    <button
                      className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default QuestionAnswer;
