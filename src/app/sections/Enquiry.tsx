"use client";

import React, { useState } from "react";
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import { getCountryCallingCode, CountryCode } from "libphonenumber-js";

countries.registerLocale(en);

const EnquiryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    country: "",
    phone: "",
    email: "",
    message: "",
  });

  const [countryCode, setCountryCode] = useState("+1"); // Default to USA

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;

    if (name === "firstName" || name === "surname") {
      value = capitalize(value); // Capitalize first letter of firstName and surname
    }

    setFormData({ ...formData, [name]: value });

    if (name === "country") {
      const alpha2Code = countries.getAlpha2Code(value, "en");
      if (alpha2Code) {
        try {
          const dialCode = getCountryCallingCode(alpha2Code as CountryCode);
          setCountryCode(`+${dialCode}`);
        } catch (error) {
          console.error("Error fetching country calling code:", error);
          setCountryCode("+1"); // Default to "+1" if an error occurs
        }
      } else {
        setCountryCode("+1"); // Default to "+1" if no alpha2Code is found
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert(result.message);
      setFormData({
        firstName: "",
        surname: "",
        country: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="bg-black text-white py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Enquiry Form</h2>
        <p className="text-center mb-12 text-neutral-400">
          Have a project in mind? Fill out the form below, and we will get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="bg-neutral-900 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-neutral-400 mb-2"
              >
                Full Name<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Surname"
                  className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-neutral-400 mb-2"
              >
                Country<span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your country</option>
                {Object.entries(countries.getNames("en")).map(([code, name]) => (
                  <option key={code} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-neutral-400 mb-2"
              >
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md bg-neutral-800 text-white">
                  {countryCode}
                </span>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-neutral-800 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-400 mb-2"
              >
                E-mail<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-400 mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryPage;
