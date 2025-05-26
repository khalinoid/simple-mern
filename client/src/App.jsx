import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMessage = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/hello");
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Simple MERN App</h1>

      <button onClick={fetchMessage} disabled={loading}>
        {loading ? "Loading..." : "Get Message from Backend"}
      </button>

      {message && (
        <div className="message">
          <h2>{message}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
