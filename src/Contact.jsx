import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("loading");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", location: "" });
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <section className="py-16 px-6 md:px-10 bg-[#333] dark:bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <div className="flex items-center mb-6">
            {/* Animated Icon */}
            <div className="bg-white dark:bg-gray-800 rounded-full p-3 mr-4 border dark:border-gray-700 transition-transform duration-300 hover:scale-110">
              <MdLocationOn className="text-gray-600 dark:text-gray-300 text-xl" />
            </div>
            <div>
              <h2 className="text-lg font-medium tracking-wide">{t("contactUs")}</h2>
              <h3 className="text-3xl font-semibold tracking-tight">24/7 Available</h3>
            </div>
          </div>
          <p className="mb-8 text-lg opacity-80 leading-relaxed">
            {t("contactMessage")}
          </p>

          <div className="flex flex-col gap-4">
            {/* Contact Links with Hover Effect */}
            <a
              href="mailto:example@gmail.com"
              className="group flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-full border dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="bg-white dark:bg-gray-700 rounded-full p-3 border dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                <MdEmail className="text-gray-600 dark:text-gray-300 text-xl" />
              </div>
              <span className="transition-opacity duration-300 group-hover:opacity-100 opacity-80">example@gmail.com</span>
            </a>
            <a
              href="tel:+1-555-44-456"
              className="group flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-full border dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="bg-white dark:bg-gray-700 rounded-full p-3 border dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                <MdPhone className="text-gray-600 dark:text-gray-300 text-xl" />
              </div>
              <span className="transition-opacity duration-300 group-hover:opacity-100 opacity-80">+1-555-44-456</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 tracking-tight">Write Us</h4>
          <p className="mb-6 text-lg opacity-80 leading-relaxed">We’d love to hear from you!</p>

          {/* Success/Error Messages with Transitions */}
          {submissionStatus === "success" && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 transition-opacity duration-300 ease-in-out opacity-0 animate-fade-in">
              <strong className="font-bold">{t("success")}!</strong>
              <span className="block sm:inline">{t("messageSent")}</span>
            </div>
          )}

          {submissionStatus === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 transition-opacity duration-300 ease-in-out opacity-0 animate-fade-in">
              <strong className="font-bold">{t("error")}!</strong>
              <span className="block sm:inline">{t("messageNotSent")}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4">
            {/* Form Inputs with Focus Effect */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none transition-shadow duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none transition-shadow duration-300"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none transition-shadow duration-300"
                required
              />
            </div>
            <div>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none transition-shadow duration-300"
                required
              >
                <option value="" disabled>
                  Location
                </option>
                <option value="Ajman">Ajman</option>
                <option value="Dubai">Dubai</option>
              </select>
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-md bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 ${
                submissionStatus === "loading" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={submissionStatus === "loading"}
            >
              {submissionStatus === "loading" ? t("sending") : t("Submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;