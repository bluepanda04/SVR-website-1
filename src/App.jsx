import { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const divRef = useRef(null); // Create a ref for the div
  const [animateText, setAnimateText] = useState(false); // State to trigger text animation

  useEffect(() => {
    // Trigger the animation for the text after component mounts
    setAnimateText(true);

    const divElement = divRef.current; // Access the div element

    // Attach the event listener for mouseover
    divElement.addEventListener("mouseover", (event) => {
      console.log(event.clientX);
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      divElement.removeEventListener("mouseover", (event) => {
        console.log(event.clientX);
      });
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="box-border h-2/4 w-full py-2 px-2">
          <div
            className="h-96 w-full flex justify-center items-center bg-[url('./assets/robo.jpg')] bg-no-repeat bg-center bg-cover rounded-md"
            ref={divRef}
          >
            <div className="flex flex-col gap-4 justify-center items-center h-full md:w-2/3 text-center bg-black bg-opacity-50 rounded-md">
            <h1 className={`text-4xl text-purple-500 font-semibold font-serif transition-all duration-1000 ease-in-out ${animateText ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
                  }`}> <span className='text-purple-500'>S</span><span className='text-orange-500 text-5xl font-thin'>V</span><span className='text-purple-500'>R</span> ROBOTICS</h1>
              {/* Add animation classes based on state */}
              <h1
                className={`text-2xl md:text-4xl text-white font-semibold font-serif transition-all duration-1000 ease-in-out ${animateText ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
                  }`}
              >
                Transforming Industries through Turnkey Robotics and Automation Implementations.
              </h1>
              <p
                className={`font-medium text-center text-lg text-white transition-all duration-1000 ease-in-out ${animateText ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
                  }`}
              >
                <span className='text-orange-500'>We</span> create intelligent machines that enhance lives and empower human potential. </p>
            </div>
          </div>
        </div>
      </main>
      <div className="px-2">
        <ProductList />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;