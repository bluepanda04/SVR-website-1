import React, { useEffect, useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import config from "../config.js"

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [organization, setOrganization] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleForm = (event) => {
    event.preventDefault(); // Prevent page reload
    if (!name || !email || !message || !mobile || !organization || !category || !image) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, mobile, organization, category, message, image });

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('organization', organization);
    formData.append('category', category);
    formData.append('message', message);
    formData.append('image', image);

    const f = fetch(`${config.API_URI}/api/connectUs`, {
      method: 'POST',
      body: formData,
    });

    f.then(() => {
      console.log("Data sent successfully");
    }).catch((err) => {
      console.log(err);
    });

    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form fields
    setName('');
    setEmail('');
    setMobile('');
    setMessage('');
    setOrganization('');
    setCategory('');
    setImage(null);
  };

  return (
    <>
      <Header />
      <div className="relative bg-[url('../src/assets/eventimg.jpg')] bg-no-repeat bg-cover bg-center w-screen flex flex-col items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-base sm:text-lg">
              We would love to hear from you! Reach out to us using the contact details below or fill out the form.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col lg:flex-row bg-black/50 p-6 sm:p-8 rounded-lg gap-6">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 text-left space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">Contact Details</h2>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-black rounded-full p-4 flex items-center justify-center">
                  <i className="fa-solid fa-location-dot fa-xl"></i>
                </div>
                <div>
                  <p className="text-lg font-semibold">Address:</p>
                  <p className="text-base">Ambegaon Pune Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-400 text-black rounded-full p-4 flex items-center justify-center">
                  <i className="fa-solid fa-envelope fa-xl"></i>
                </div>
                <div>
                  <p className="text-lg font-semibold">Email:</p>
                  <p className="text-base">krunali@svrrobotics.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-400 text-black rounded-full p-4 flex items-center justify-center">
                  <i className="fa-solid fa-phone fa-xl"></i>
                </div>
                <div>
                  <p className="text-lg font-semibold">Phone:</p>
                  <p className="text-base">+91 952 9316 252</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">Get In Touch</h2>
              <form className="space-y-4" onSubmit={handleForm}>
                <div>
                  <label htmlFor="name" className="block mb-1 text-lg font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Your Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-lg font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Your Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block mb-1 text-lg font-semibold">
                    Mobile No.
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Your Mobile No."
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block mb-1 text-lg font-semibold">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Your Organization"
                    value={organization}
                    onChange={(event) => setOrganization(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block mb-1 text-lg font-semibold">
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    <option value="">Select a Category</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Product Details">Product Details</option>
                    <option value="Training and Workshop">Training and Workshop</option>
                    <option value="Setup and Costing">Setup and Costing</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="image" className="block mb-1 text-lg font-semibold">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    onChange={(event) => setImage(event.target.files[0])}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-lg font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                    placeholder="Your Message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-6 px-4 border-t mt-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          <li>
            <strong>What services does your company provide?</strong>
            <p>We specialize in both educational and application-based robotics solutions and can customize them to suit your needs.</p>
          </li>
          <li>
            <strong>Where are your offices located?</strong>
            <p>Our headquarters are in Pune, Maharashtra, India, with global support available online.</p>
          </li>
          <li>
            <strong>How do I raise a support ticket?</strong>
            <p>You can use the support page on our website to submit your request or email your query to support@svrinfotech.net.</p>
          </li>
          <li>
            <strong>What is the typical response time for customer support?</strong>
            <p>Our support team aims to respond to queries within 24-48 hours.</p>
          </li>
          <li>
            <strong>Do you provide training in robotics and automation?</strong>
            <p>We offer training services for students and professionals in robotics, automation, and related technologies.</p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
