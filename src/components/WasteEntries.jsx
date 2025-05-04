import { useEffect, useState } from "react";
import WasteSummary from "./WasteSummary";

const WasteEntries = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // For success/error messages
  const [confirmId, setConfirmId] = useState(null);

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const stored = JSON.parse(localStorage.getItem("user"));
      const userId = JSON.parse(atob(stored.token.split(".")[1])).id;

      const res = await fetch(`http://localhost:5000/api/waste/${userId}`);
      const data = await res.json();
      if (res.ok) {
        setEntries(data);
        setMessage("");
      } else {
        setMessage("Failed to load entries.");
        setMessageType("error"); // Error message
      }
    } catch (err) {
      setMessage("Error fetching data.");
      setMessageType("error"); // Error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/waste/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Entry deleted successfully.");
        fetchEntries();
      } else {
        setMessage(data.msg || "Delete failed.");
      }
    } catch (err) {
      setMessage("Error deleting entry.");
    }
  };


  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Your Waste Entries</h2>
      {message && (
        <p
          className={`text-sm mb-4 ${messageType === "success" ? "text-green-600" : "text-red-600"
            }`}
        >
          {message}
        </p>
      )}
      {entries.length === 0 ? (
        <p className="text-gray-600">No entries found yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <WasteSummary entries={entries} />
          <table className="min-w-full table-auto text-sm sm:text-base">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2 border">Food Type</th>
                <th className="px-4 py-2 border">Quantity (kg)</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Notes</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry._id} className="text-center border-t">
                  <td className="px-4 py-2 border">{entry.type}</td>
                  <td className="px-4 py-2 border">{entry.quantity}</td>
                  <td className="px-4 py-2 border">
                    {new Date(entry.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border">{entry.notes || "—"}</td>
                  <td className="px-4 py-2 border">
                    {confirmId === entry._id ? (
                      <div className="space-x-2">
                        <button
                          onClick={() => handleDelete(entry._id)}
                          className="text-sm text-white bg-red-500 px-2 py-1 rounded"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setConfirmId(null)}
                          className="text-sm text-gray-600 border px-2 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setConfirmId(entry._id)}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WasteEntries;
