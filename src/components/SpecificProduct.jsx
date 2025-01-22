import React from "react";
import { useParams } from "react-router-dom";
import image from '../assets/AI robot.jpg';
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const ProductInformation = {
  scara: {
    title: "Scara Robot",
    image: ['../src/assets/AI robot.jpg', image, image],
    description: "akklagkd dfkjld  hdk;",
    features: ["feature 1", "feature2"],
    blueprintImages: ['../src/assets/AI robot.jpg', '../src/assets/AI robot.jpg'],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["https://www.youtube.com/embed/u6KsQ8_4qq8?si=nqjsc9-ooQyu4dPE", "https://www.youtube.com/embed/u6KsQ8_4qq8?si=nqjsc9-ooQyu4dPE"],
    document: ["path1", "path2"],
  },
  roboticslab: {
    title: "Robotics Lab Setup",
    image: ["../src/assets/setup_my_lab_1.jpg", "../src/assets/setup_my_lab_2.jpg", "path3"],
    description: "Complete Product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  cncvmclab: {
    title: "CNC VMC Lab",
    image: ["path1", "path2", "path3"],
    description: "COMPLETE PRODUCT DESCRIPTION",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  cobot: {
    title: "Cobot",
    image: ["path1", "../src/assets/cobotsvr.jpeg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  cartesian: {
    title: "Cartesian Robot",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  fms: {
    title: "Flexible Manufacturing System",
    image: ["path1", "../src/assets/fms.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  electrohyrdolic: {
    title: "IoT, PLC, Manual Based Electro-Hydraulic System",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  electropneumatic: {
    title: "IoT, PLC, Manual Based Electro-Pneumatic System",
    image: ["path1", "../src/assets/pneumatic.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  elevetorkit: {
    title: "Elevator Kit",
    image: ["path1", "../src/assets/Elevator simulation.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  bottleplant: {
    title: "Bottle Filling Plant ",
    image: ["path1", "psrc/assets/bottle filling.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  jawgripper: {
    title: "3-Jaw Concentric Gripper",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  susctiongripper: {
    title: "Suction Cup Gripper",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  sensorizedgripper: {
    title: "Sensorized Gripper",
    image: ["path1", "../src/assets/SensorisedGripper.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  maggripper: {
    title: "Magnetic Gripper",
    image: ["path1", "../src/assets/magneticgripper.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  gripperlab: {
    title: "Gripper Lab",
    image: ["path1", "../src/assets/gripperlab img.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  graboparallel: {
    title: "Svr Grabo 1.2 & 5 (Parallel Jaw) ",
    image: ["../src/assets/Parallel Grabo 5.png", "../src/assets/SVR Garbo 1.2,5 gripper.jpeg", "../src/assets/parallel_1.2.png"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  grabocurvilinear: {
    title: "Svr Grabo 1.2 & 5 (Curvilinear Jaw)",
    image: ["../src/assets/curv_1.2.png", "../src/assets/SVR Garbo ( Curvilinear Jaw).jpeg", "../src/assets/Curvilinear Grabo.png"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  pneumatic: {
    title: "Pneumatic 2 & 3 Jaw Gripper",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  vfd: {
    title: "VFD Kit",
    image: ["path1", "../src/assets/VFD KIT.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  elevatorsim: {
    title: "Elevator Simulation Kit",
    image: ["path1", "../src/assets/Elevator simulation.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  steppermotor: {
    title: "Stepper Motor Speed and Direction Control Kit",
    image: ["path1", "../src/assets/Stepper Motor Speed & Direction Control.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  waterlvlcontrol: {
    title: "Water Level Control Kit",
    image: ["path1", "../src/assets/waterlevelcontrolkit.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  conveyor: {
    title: "Conveyor Kit",
    image: ["path1", "../src/assets/Conveyorkitweb.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  stardelta: {
    title: "Star Delta Kit",
    image: ["path1", "../src/assets/stardeltastarter.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  tempcontrol: {
    title: "Temperature Control Kit",
    image: ["path1", "../src/assets/temperaturecontrolkit.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  mazerobot: {
    title: "Maze Solving Robot",
    image: ["path1", "psrc/assets/Maze Solving Robot.JPG", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  linerobot: {
    title: "Line Following Robot ",
    image: ["path1", "../src/assets/line follower.JPG", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  balancerobot: {
    title: "Self-balancing Robot",
    image: ["path1", "../src/assets/self balancing.JPG", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  digitadice: {
    title: "Digital Dice Kit",
    image: ["path1", "../src/assets/Digital Dice.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  fankit: {
    title: "Temperature Controlled Fan Kit",
    image: ["path1", "../src/assets/Temperature Controlled Fan Kit.JPG", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  objconter: {
    title: "Object Counter Kit",
    image: ["path1", "../src/assets/object counter.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  knight: {
    title: "Knight 4.0, 5.0, 10.0 Bipedal",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  roboanalyzer: {
    title: "RoboAnalyzer",
    image: ["path1", "../src/assets/robo soft.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  mechanalyzer: {
    title: "MechAnalyzer",
    image: ["path1", "../src/assets/mach1 soft.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  feast: {
    title: "FEAST",
    image: ["path1", "../src/assets/feast Img.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  rttoolbox: {
    title: "RT Tool box Software",
    image: ["path1", "psrc/assets/Rt tool box image.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },

};

const SpecificProduct = () => {
  const { productId } = useParams(); // Get productId from URL
  const product = ProductInformation[productId];

  if (!product) {
    return <div className="text-center text-red-500 text-xl mt-10">Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">{product.title}</h1>

        {/* Image Carousel */}
        <div className="flex justify-center space-x-5 mb-10">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className="w-1/4 h-auto rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10">{product.description}</p>

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Blueprint Images */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Blueprint Images</h2>
          <div className="flex space-x-5 justify-center">
            {product.blueprintImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Blueprint ${index + 1}`}
                className="w-1/4 h-auto rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Specifications</h2>
          <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-3 text-left">Key</th>
                <th className="border border-gray-300 px-6 py-3 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {product.specifications.map((spec, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {Object.entries(spec).map(([key, value]) => (
                    <>
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">{key}</td>
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">{value}</td>
                    </>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Links */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Links</h2>
          
            {product.links.map((link, index) => (
            //   <li key={index}>
            //     <a
            //       href={`https://${link}`}
            //       target="_blank"
            //       rel="noopener noreferrer"
            //       className="text-blue-500 hover:underline"
            //     >
            //       {link}
            //     </a>
            //   </li>


            <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="inline m-4"></iframe>
            ))}
          
          
        </div>

        {/* Documents */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Documents</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {product.document.map((doc, index) => (
              <li key={index} className="text-lg">
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecificProduct;
