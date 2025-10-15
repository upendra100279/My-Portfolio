import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bolmxnla", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-teal-400 drop-shadow-lg">
          Contact Me
        </h1>
        <p className="text-lg text-gray-300 font-light text-center leading-relaxed mb-10">
          Please fill out the form below to get in touch with me. I'll get back
          to you as soon as possible.
        </p>

        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100/10 backdrop-blur-sm w-full max-w-lg px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-teal-300 mb-6 text-center">
              Send Your Message
            </h2>

            {/* Full Name */}
            <div className="flex flex-col mb-6">
              <label className="block text-gray-300 font-medium mb-2">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                className="shadow-md rounded-lg appearance-none border border-gray-700 bg-gray-900 py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-teal-400"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-sm text-red-500 mt-2">
                  This field is required
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col mb-6">
              <label className="block text-gray-300 font-medium mb-2">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow-md rounded-lg appearance-none border border-gray-700 bg-gray-900 py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-teal-400"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-sm text-red-500 mt-2">
                  This field is required
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col mb-6">
              <label className="block text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="shadow-md rounded-lg appearance-none border border-gray-700 bg-gray-900 py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-teal-400"
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message or query"
              />
              {errors.message && (
                <span className="text-sm text-red-500 mt-2">
                  This field is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;