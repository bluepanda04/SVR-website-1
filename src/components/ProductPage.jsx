import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const sections = [
    {
      title: "Robot",
      link:"robot",
      items: ["Articulated Robot", "Cobot", "Scara Robot", "Cartesian Robot"],
    },
    {
      title: "FMS",
      link:"fms",
      items: ["Flexible/Electrofab/Modular/Smart Manufacturing System"],
    },
    {
      title: "SVR Innovation",
      link:"svrinnovation",
      items: [
        "IoT, PLC, Manual Based Electro-Hydraulic System",
        "IoT, PLC, Manual Based Electro-Pneumatic System",
        "Elevator Kit",
        "Bottle Filling Plant",
      ],
    },
    {
      title: "Grippers",
      link:"gripper",
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
      link:"plc",
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
      link:"schoolinnovation",
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
      link:"software",
      items: ["RoboAnalyzer", "MechAnalyzer", "FEAST", "RT Tool Box Software"],
    },
  ];

  return (
    <>
      <Header />
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay for better readability */}
        <div className="flex flex-wrap justify-center gap-4 p-6 overflow-auto relative z-10">
          {sections.map((section, index) => (
            
            <div
              key={index}
              className="w-full sm:w-1/3 bg-gray-100 shadow-md rounded-lg p-4 text-center hover:bg-slate-300"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-500">{section.title}</h3>
              <ul className="list-none">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={`/ProductDetails/${section.link}`}
                      state={{ stateParam: section }}
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
      <Footer/>
    </>
  );
};

export default ProductPage;
