import React, { useState } from "react";

const WasteTracker = () => {
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.token) {
        return setMessage("User not logged in.");
      }

      // Decode JWT to extract userId
      const decoded = JSON.parse(atob(user.token.split(".")[1]));
      const userId = decoded.id;

      const response = await fetch("http://localhost:5000/api/waste/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          type,
          quantity,
          date,
          notes,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Entry added successfully!");
        setType("");
        setQuantity("");
        setDate("");
        setNotes("");
      } else {
        setMessage(`❌ Error: ${data.msg || data.error}`);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Track Your Food Waste</h2>
      {message && <p className="mb-4 text-sm text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Food Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Rice, Vegetables"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Quantity (kg)</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            step="0.1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows="3"
            placeholder="Optional notes"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default WasteTracker;
