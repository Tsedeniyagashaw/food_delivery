"use client"

import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center py-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">Contact Us</h1>
        
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-xl">We &apos; d love to hear from you!</p>
          <div className="text-center">
            <p><strong>Address:</strong> 123 Burger Lane, Foodville</p>
            <p><strong>Email:</strong> contact@burgerhub.com</p>
            <p><strong>Phone:</strong> +1 (800) 123-4567</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-orange-600 text-white p-3 rounded-md mt-4 hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
