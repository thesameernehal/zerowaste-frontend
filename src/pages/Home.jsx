// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 text-gray-800">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ZeroWaste – Track. Reduce. Inspire.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering individuals and institutions to reduce food waste with smart tracking and awareness.
        </p>
        <div className="space-x-4">
          <Link
            to="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow"
          >
            Start Tracking
          </Link>
          <Link
            to="/about"
            className="border border-green-600 text-green-700 hover:bg-green-100 font-semibold py-2 px-6 rounded"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Why ZeroWaste Section */}
      <div className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why ZeroWaste?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">🌱 Sustainability</h3>
            <p>Reduce environmental impact by tracking and minimizing your food waste.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">📊 Smart Insights</h3>
            <p>Visualize your waste trends and make data-driven changes.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">🤝 Community Impact</h3>
            <p>Partner with NGOs and contribute to a better future together.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
