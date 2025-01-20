import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const sections = [
    {
      title: "Robot",
      link: "robot",
      items: ["Articulated Robot", "Cobot", "Scara Robot", "Cartesian Robot"],
    },
    {
      title: "FMS",
      link: "fms",
      items: ["Flexible/Electrofab/Modular/Smart Manufacturing System"],
    },
    {
      title: "SVR Innovation",
      link: "svrinnovation",
      items: [
        "IoT, PLC, Manual Based Electro-Hydraulic System",
        "IoT, PLC, Manual Based Electro-Pneumatic System",
        "Elevator Kit",
        "Bottle Filling Plant",
      ],
    },
    {
      title: "Grippers",
      link: "gripper",
      items: [
        "3-Jaw Concentric Gripper",
        "Suction Cup Gripper",
        "Sensorized Gripper",
        "Magnetic Gripper",
        "Gripper Lab",
        "SVR Garbo 1.2 & 5 (Parallel Jaw)",
        "SVR Garbo 1.2 & 5 (Curvilinear Jaw)",
        "Pneumatic 2 & 3 Jaw Gripper",
      ],
    },
    {
      title: "PLC Application",
      link: "plc",
      items: [
        "VFD Kit",
        "Elevator Simulation",
        "Stepper Motor Speed & Direction Control",
        "Water Level Control",
        "Conveyor",
        "Star Delta Starter",
        "Temperature Control",
      ],
    },
    {
      title: "School Robotics Lab",
      link: "schoolinnovation",
      items: [
        "Maze Solving Robot",
        "Line Following Robot",
        "Self-Balancing Robot",
        "Digital Dice Kit",
        "Temperature Controlled Fan Kit",
        "Object Counter",
        "IoT Robot",
        "Knight 4.0, 5.0, 10.0",
      ],
    },
    {
      title: "Software",
      link: "software",
      items: ["RoboAnalyzer", "MechAnalyzer", "FEAST", "RT Tool Box Software"],
    },
  ];

  return (
    <>
      <Header />
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment:'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 max-w-screen-xl mx-auto p-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
            Explore Our Product Categories
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-slate-300 text-white shadow-2xl border-4 border-slate-500 rounded-lg p-6 hover:scale-105 transform transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold text-center mb-4 text-orange-400">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="bg-orange-500 h-3 w-3 rounded-full inline-block mr-3"></span>
                      <Link
                        to={`/ProductDetails/${section.link}`}
                        state={{ stateParam: section }}
                        className="text-lg text-black hover:text-orange-300 transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
