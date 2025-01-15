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
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay for better readability */}
        <div className="relative z-10 flex flex-wrap justify-center gap-6 p-8 sm:p-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="w-full sm:w-1/3 md:w-1/4 bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg rounded-xl p-6 hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-orange-600">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="text-lg">
                    <Link
                      to={`/ProductDetails/${section.link}`}
                      state={{ stateParam: section }}
                      className="block text-white hover:text-indigo-300 transition-colors duration-300"
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
      <Footer />
    </>
  );
};

export default ProductPage;
