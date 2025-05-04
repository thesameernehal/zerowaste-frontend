// src/pages/NGO.jsx
import React from "react";
import { FaPhone, FaMapMarkerAlt, FaHandshake } from "react-icons/fa";

const ngos = [
  {
    name: "Feeding India",
    phone: "+91 9876543210",
    address: "Block C, Sector 62, Noida, Uttar Pradesh",
    assurance: "We pick up surplus food within 2 hours of notification."
  },
  {
    name: "Robin Hood Army",
    phone: "+91 9123456780",
    address: "MG Road, Bengaluru, Karnataka",
    assurance: "We ensure food reaches the hungry the same day."
  },
  {
    name: "No Food Waste",
    phone: "+91 9012345678",
    address: "T Nagar, Chennai, Tamil Nadu",
    assurance: "We collaborate with hostels, restaurants, and households for food collection."
  }
];

const NGO = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        NGO Collaboration
      </h1>

      <p className="text-lg text-gray-700 text-center mb-10">
        ZeroWaste proudly collaborates with trusted NGOs who ensure that excess edible food
        is not thrown away, but reaches those in need. Below are some of the NGOs we partner with.
        Users can directly contact them via phone or email for food pickups and awareness initiatives.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ngos.map((ngo, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-2 flex items-center gap-2">
              <FaHandshake /> {ngo.name}
            </h2>
            <p className="text-gray-700 mb-1 flex items-center gap-2">
              <FaPhone /> {ngo.phone}
            </p>
            <p className="text-gray-700 mb-3 flex items-center gap-2">
              <FaMapMarkerAlt /> {ngo.address}
            </p>
            <p className="text-green-600 font-medium mb-3">
              {ngo.assurance}
            </p>

            {/* Contact Buttons */}
            <div className="mt-3 flex space-x-3">
              <a
                href={`tel:${ngo.phone.replace(/\s+/g, "")}`}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
              >
                Call NGO
              </a>
              <a
                href={`mailto:contact@${ngo.name.replace(/\s+/g, "").toLowerCase()}.org`}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
              >
                Email NGO
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGO;
