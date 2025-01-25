import React from "react";
import { useParams } from "react-router-dom";
import image from '../assets/AI robot.jpg';
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const ProductInformation = {
  Scara: {
    title: "Scara Robot",
    image: ['../src/assets/AI robot.jpg', image, image],
    description: "akklagkd dfkjld  hdk;",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  Scara2: {
    title: "Scara Robot",
    image: ["path1", "path2", "path3"],
    description: "akklagkd dfkjld  hdk;",
    features: ["feature 1", "feature2"],
    blueprintImages: ["path1", "path2"],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  Scara3: {
    title: "Scara Robot",
    image: ['../src/assets/AI robot.jpg', image, image],
    description: "akklagkd dfkjld  hdk;",
    features: ["feature 1", "feature2"],
    blueprintImages: ['../src/assets/AI robot.jpg', '../src/assets/AI robot.jpg'],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    // links: ["https://www.youtube.com/embed/u6KsQ8_4qq8?si=nqjsc9-ooQyu4dPE", "https://www.youtube.com/embed/u6KsQ8_4qq8?si=nqjsc9-ooQyu4dPE"],
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


          {product.links && product.links.map((link, index) => {
            if (index == 0) {
              return (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-5">Links</h2>
                  <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="inline m-4"></iframe>
                </>
              )
            }

            return (

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
            )
          })}


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
