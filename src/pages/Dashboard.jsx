import React, { useEffect, useState } from "react";
import WasteTracker from "../components/WasteTracker";
import WasteEntries from "../components/WasteEntries";
import WasteChart from "../components/WasteChart";

export default function Dashboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const stored = JSON.parse(localStorage.getItem("user"));
        if (!stored || !stored.token) return;

        const token = stored.token;
        const decoded = JSON.parse(atob(token.split(".")[1]));
        const userId = decoded.id;

        const response = await fetch(`http://localhost:5000/api/waste/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setEntries(data);
        } else {
          console.error("Error fetching waste entries", data.msg);
        }
      } catch (error) {
        console.error("Error fetching waste entries", error.message);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="p-4">
      <WasteTracker />
      <WasteEntries />
      {entries.length > 0 ? (
        <WasteChart entries={entries} />
      ) : (
        <p className="text-center mt-4 text-red-500">No waste entries found for chart.</p>
      )}
    </div>
  );
}
