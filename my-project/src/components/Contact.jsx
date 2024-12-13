import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = React.forwardRef((props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_moop7ys",  // Replace with your actual service ID
        "template_alzlog8", // Replace with your actual template ID
        form.current,
        "DncPXcnduNbBQmH6k"  // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-8">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-lg mb-2">Name</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="from_email" className="block text-lg mb-2">Email</label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
});

export default Contact;
