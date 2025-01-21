import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import config from "../config.js";

const MultiFormPage = () => {
  const [visibleForm, setVisibleForm] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    organizationName: "",
    productName: "",
    serviceName: "",
    issueDescription: "",
    query: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contactNo", formData.contactNo);
    formDataToSend.append("organizationName", formData.organizationName);

    if (formType === "Products") {
      formDataToSend.append("productName", formData.productName);
    }
    if (formType === "Services") {
      formDataToSend.append("serviceName", formData.serviceName);
      formDataToSend.append("issueDescription", formData.issueDescription);
    }
    if (formType === "Training and Workshop" || formType === "Setup and Costing") {
      formDataToSend.append("query", formData.query);
    }
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await fetch(`${config.API_URI}/api/${formType.toLowerCase()}`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert(`${formType} form submitted successfully!`);
        resetForm();
        setVisibleForm(null);
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      contactNo: "",
      organizationName: "",
      productName: "",
      serviceName: "",
      issueDescription: "",
      query: "",
      image: null,
    });
  };

  const handleFormSwitch = (formType) => {
    resetForm();
    setVisibleForm(formType);
  };

  const renderForm = (formType) => {
    switch (formType) {
      case "Services":
        return (
          <>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Service Name</label>
              <input
                type="text"
                name="serviceName"
                value={formData.serviceName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Describe Your Issue</label>
              <textarea
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </>
        );

      case "Products":
        return (
          <>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </>
        );

      case "Training and Workshop":
      case "Setup and Costing":
        return (
          <>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Your Query</label>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Customer Support</h1>
        <div className="flex justify-center gap-4 mb-8">
          {["Services", "Products", "Training and Workshop", "Setup and Costing"].map(
            (category) => (
              <button
                key={category}
                onClick={() => handleFormSwitch(category)}
                className={`px-4 py-2 ${
                  visibleForm === category
                    ? "bg-blue-800 text-white"
                    : "bg-[#010050] text-white"
                } rounded-lg shadow-md hover:bg-blue-900 transition`}
              >
                {category}
              </button>
            )
          )}
        </div>
        {visibleForm && (
          <form
            onSubmit={(e) => handleSubmit(e, visibleForm)}
            className="max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-white bg-opacity-80"
          >
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Contact No.</label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Organization Name</label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {renderForm(visibleForm)}
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Upload Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="block w-full text-gray-600 bg-gray-100 p-2 border rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="px-4 py-2 bg-[#010050] text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setVisibleForm(null)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MultiFormPage;
