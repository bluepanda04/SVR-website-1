import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const AccordionItem = ({ title, description, images }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm my-4">
      <button
        className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <p className="text-gray-600">{description}</p>
          {images && images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={title}
                  className="w-full h-auto rounded-md shadow-sm"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Events = () => {
  const accordionData = [
    {
      title: "AICTE Training",
      description:
        "Khushaldas Badhan delivered a session on 'Applications of Robotics in Nuclear, Defence, Security & Space Science Fields.'",
      images: ["../src/assets/AICTETRAINING.png"],
    },
    {
      title: "NAFED 2019",
      description: "Nafed 2019 Developer's & User's Meet, Mumbai.",
      images: [
        "../src/assets/nafed 2019 (1).jpeg",
        "../src/assets/nafed 2019 (2).jpeg",
        "../src/assets/nafed 2019 (3).jpeg",
        "../src/assets/nafed 2019 (4).jpeg",
        "../src/assets/nafed 2019 (5).jpeg",
      ],
    },
    {
      title: "NAFED 2018",
      description:
        "Nafed 2018 Developer's & User's Meet at Panimalar College, Chennai.",
      images: [
        "../src/assets/nafed_1 2018.jpg",
        "../src/assets/nafed_2 2018.jpg",
        "../src/assets/nafed_4 2018.jpg",
        "../src/assets/nafed_3 2018.jpg",
        "../src/assets/nafed_5 2018.jpg",
      ],
    },
    {
      title: "JJ Magdum College of Engineering Robotics Workshop",
      description:
        "SVR Robotics conducted a two-day workshop focusing on basics of robotics, real-time applications, and hands-on experience for students.",
      images: [
        "../src/assets/img- (1)jj.jpg",
        "../src/assets/img- (2)jj.jpg",
        "../src/assets/img- (3)jj.jpg",
        "../src/assets/img- (4)jj.jpg",
        "../src/assets/img- (5)jj.jpg",
        "../src/assets/img- (6)jj.jpg",
      ],
    },
    {
      title:
        "Jorhat Institute of Science and Technology Robotics Workshop",
      description:
        "SVR Robotics conducted a two-day workshop in collaboration with CDAC Kolkata, focusing on basics of robotics and real-time applications.",
      images: ["../src/assets/img-1 jorhat.jpg"],
    },
    {
      title: "ROC",
      description: "Photos from the ROC event.",
      images: ["../src/assets/ROC1.jpg", "../src/assets/ROC2.jpg", "../src/assets/ROC3.jpg"],
    },
  ];

  return (
    <>
    <Header/>
    <main className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Our Events and Workshops
          </h1>
          <p className="text-gray-600">
            Explore our past events and workshops showcasing the innovative work
            and sessions conducted by SVR Robotics.
          </p>
        </header>
        <div>
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              description={item.description}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
};

export default Events;
