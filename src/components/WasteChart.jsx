// src/components/WasteChart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const WasteChart = ({ entries }) => {
  // Group entries by food type and sum the quantity
  const groupedData = entries.reduce((acc, entry) => {
    acc[entry.type] = (acc[entry.type] || 0) + Number(entry.quantity);
    return acc;
  }, {});

  const chartData = Object.entries(groupedData).map(([type, quantity]) => ({
    type,
    quantity,
  }));

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Waste Quantity by Food Type</h2>
      {chartData.length === 0 ? (
        <p>No data to display.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default WasteChart;
