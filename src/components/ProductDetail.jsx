import React from 'react';
import { useLocation , useParams } from 'react-router-dom'; // Import useLocation to get state from the router
import Header from './Header';
import image from "../assets/Articulated Robot bg.jpg"

function ProductDetails() {
  const location = useLocation(); // Use the useLocation hook to access the passed state
  const { product } = location.state || {}; // Extract product from state
    console.log(location)
    let {type} = useParams();
    let stateParams = useLocation().state.stateParam;
    console.log("props value:",type);
    console.log("stateParams value:", stateParams);
    
    
  if (!stateParams) {
    console.log(product)
    return <div>No product details available</div>;
  }


  const section = [
    {title:'Articulated Robot' , description:'At SVR Robotics, our articulated robots are designed for a wide range of applications, including precision assembly, welding, material handling, and machine tending. These versatile robots offer high flexibility and accuracy, making them ideal for improving productivity and efficiency in manufacturing processes across various industries.' , features:["Optimized arm length for broader movement, complex assembly and operations." , "Can with stand harsh environmental conditions.", "Can be used for various industrial applications.","Variable paload from 3kg to 80kg." ,"Maximum Reach : 504mm to 2100mm."]}
  ]

  return (
    <>
    <Header/>
    {/* <div className="flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-6">{stateParams.title}</h1>
      <img src={stateParams.img} alt={stateParams.title} className="w-80 h-80 object-cover rounded-lg mb-4" />
      <p className="text-lg">Product details will go here...</p>
    </div> */}

<div className="flex justify-evenly w-full h-1/3 p-2 border-2 border-slate-800 rounded-lg">
        <div className='flex justify-evenly bg-slate-300 rounded-md'>
      {/* Left side: Image */}
      <div className="w-1/3">
        <img
          src={image}
          alt="Product"
          className="w-full h-full object-cover p-2 rounded-2xl"
        />
      </div>

      {/* Right side: Content */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4 font-serif text-orange-600">Articulated Robot</h1>
        <p className="text-lg mb-6 text-left">
        At SVR Robotics, our articulated robots are designed for a wide range of applications, including precision assembly, welding, material handling, and machine tending. These versatile robots offer high flexibility and accuracy, making them ideal for improving productivity and efficiency in manufacturing processes across various industries.
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Feature 1: Lorem ipsum dolor sit amet</li>
          <li>Feature 2: Consectetur adipiscing elit</li>
          <li>Feature 3: Integer nec odio. Praesent libero.</li>
          <li>Feature 4: Sed cursus ante dapibus diam</li>
        </ul>
      </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetails;
