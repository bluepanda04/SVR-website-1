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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    description: "A flexible manufacturing system (FMS) is a production method that is designed to easily adapt to changes in the type and quantity of the product being manufactured. Machines and computerized systems can be configured to manufacture a variety of parts and handle changing levels of production. A flexible manufacturing system (FMS) can improve efficiency and thus lower a company's production cost. Flexible manufacturing also can be a key component of a make-to-order strategy that allows customers to customize the products they want. Such flexibility can come with higher upfront costs. Purchasing and installing the specialized equipment that allows for such customization may be costly compared with more traditional systems.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["https://www.youtube.com/embed/IE5XVANBxaU?si=3JVUbhrumBPkp94w", "https://www.youtube.com/embed/4YTySpU-iHw?si=hwMA097ybdfsRszz"],
    document: ["path1", "path2"],
  },
  electrohyrdaulic: {
    title: "IoT, PLC, Manual Based Electro-Hydraulic System",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  bottlefillingplant: {
    title: "Bottle Filling Plant ",
    image: ["path1", "psrc/assets/bottle filling.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  magneticgripper: {
    title: "Magnetic Gripper",
    image: ["path1", "../src/assets/magneticgripper.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  pneumaticgripper: {
    title: "Pneumatic 2 & 3 Jaw Gripper",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  elevatorsimulationkit: {
    title: "Elevator Simulation Kit",
    image: ["path1", "../src/assets/Elevator simulation.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  steppermotorcontrolkit: {
    title: "Stepper Motor Speed and Direction Control Kit",
    image: ["path1", "../src/assets/Stepper Motor Speed & Direction Control.jpg", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  waterlevelcontrolkit: {
    title: "Water Level Control Kit",
    image: ["path1", "../src/assets/waterlevelcontrolkit.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  conveyorkit: {
    title: "Conveyor Kit",
    image: ["path1", "../src/assets/Conveyorkitweb.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  stardeltakit: {
    title: "Star Delta Kit",
    image: ["path1", "../src/assets/stardeltastarter.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  temperaturecontrol: {
    title: "Temperature Control Kit",
    image: ["path1", "../src/assets/temperaturecontrolkit.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  mazesolvingrobot: {
    title: "Maze Solving Robot",
    image: ["path1", "psrc/assets/Maze Solving Robot.JPG", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  linefollowingrobot: {
    title: "Line Following Robot ",
    image: ["path1", "../src/assets/line follower.JPG", "path3"],
    description: "Line Follower Robot uses Arduino Nano development board. The robot finds the path in the Line and follow the same. The system uses Infrared sensor to find the path and ultrasound sensor for obstacle detection which is controlled by C programmed microcontroller and the same drives the geared DC motor. The user will get thorough knowledge about functioning and interfacing of an IR sensor, a DC motor & an ultrasound sensor. This project will also help the user in developing programming logic using if-else function. This very simple and easy to build kit is perfect for beginners and is a great learning platform to get into robotics and engineering.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { Lenght: "200mm" },
      { Width: "220mm" },
      { Height: "120mm" },
      { Battery_Life: "4hrs." },

    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  selfbalancingrobot: {
    title: "Self-balancing Robot",
    image: ["path1", "../src/assets/self balancing.JPG", "path3"],
    description: "Two wheeled self-balancing robot, which is based on an inverted pendulum system, is dynamically stable but statically unstable. The robot involves various physics and control theories. This project describes the modeling of the two wheeled self-balancing robot, designs the robot controller using PID and implements the controller on the robot. In this project, an inertial measurement unit (IMU) is used, which combines accelerometer and gyroscope measurement in order to estimate and obtain the tilt angle of the robot. The PID controller is applied to correct the error between the desired set point and the actual tilt angle and adjust the dc motor speed accordingly to balance the robot. The result obtained shows that the PID controller is able to balance the robot acceptably but with some limitations. The simulation result of the model is compared with the developed hardware and the performance of the controller is analyzed and discussed.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  digitaldice: {
    title: "Digital Dice Kit",
    image: ["path1", "../src/assets/Digital Dice.jpg", "path3"],
    description: "We all are familiar with dice and played Ludo or Snake & Ladders game by using dice. Dice is a cube type solid box which contains 6 different numbers on all of its sides. We throw dice on a surface to get a random number while playing the games. In this project we have tried to replicate it with a digital dice using Arduino and seven segment display. In place of throwing the dice, here we need to press a button to get a random number between 0 to 6.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  temperaturecontrolledfan: {
    title: "Temperature Controlled Fan Kit",
    image: ["path1", "../src/assets/Temperature Controlled Fan Kit.JPG", "path3"],
    description: "This application is simple just by using temperature sensor LM35 with an Arduino kit to control a fan with respect to the temperature read by the micro-controller which in this case is the Arduino kit. The temperature sensor LM35 is connected with the Arduino with an analog input pin A0 (the temperature is an analog signal), while the fan is connected with a PWM (Pulse Width Modulation) pin 6 which controls the speed of the fan with respect to the output temperature using a function map in the Arduino IDE.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  objectcounter: {
    title: "Object Counter Kit",
    image: ["path1", "../src/assets/object counter.png", "path3"],
    description: "Object counters or product counters are important applications used in industries, shopping malls, etc. They count objects or products automatically and so reduce human efforts.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
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
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  sampledescriptionpage: {
    title: "Product_Name",
    image: ["path1", "path2", "path3"],
    description: "Complete_product_Description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Blueprint Images */}
        {/* <div className="mb-10">
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
        </div> */}

        {/* Specifications Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Product Specifications</h2>
          <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-3 text-left">Characteristics</th>
                <th className="border border-gray-300 px-6 py-3 text-left">Description</th>
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
