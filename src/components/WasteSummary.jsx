// src/components/WasteSummary.jsx
import React from "react";

const WasteSummary = ({ entries }) => {
  if (!entries || entries.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No entries to summarize.
      </div>
    );
  }

  const totalEntries = entries.length;
  const totalQuantity = entries.reduce((sum, entry) => sum + entry.quantity, 0);

  const typeCount = {};
  entries.forEach((entry) => {
    typeCount[entry.type] = (typeCount[entry.type] || 0) + entry.quantity;
  });

  const mostWastedType = Object.keys(typeCount).reduce((a, b) =>
    typeCount[a] > typeCount[b] ? a : b
  );

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold mb-2">📊 Waste Summary</h2>
      <ul className="space-y-1">
        <li>Total Entries: <strong>{totalEntries}</strong></li>
        <li>Total Quantity Wasted: <strong>{totalQuantity.toFixed(2)} kg</strong></li>
        <li>Most Wasted Food Type: <strong>{mostWastedType}</strong></li>
      </ul>
    </div>
  );
};

export default WasteSummary;
