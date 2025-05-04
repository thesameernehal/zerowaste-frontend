// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4 text-green-700">About ZeroWaste</h1>
      <p className="text-gray-700 mb-4">
        <strong>ZeroWaste</strong> is a modern, tech-driven platform aimed at reducing food waste and promoting sustainable practices. It empowers individuals and institutions like hostels, restaurants, and homes to track their food waste effectively while also raising awareness about its environmental and social impact.
      </p>
      <p className="text-gray-700 mb-4">
        With a user-friendly dashboard, real-time waste tracking, insightful charts, and NGO collaboration, ZeroWaste is more than a tracker — it's a step toward change.
      </p>
      <p className="text-gray-700">
        Our mission is to bridge the gap between excess food and those in need by building an ecosystem of responsible citizens and responsive NGOs. Let’s make every meal count!
      </p>
    </div>
  );
};

export default About;
