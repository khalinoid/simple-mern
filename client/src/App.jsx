import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMessage = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://0c158465-e26b-47e2-bc42-dbf4a30fc632-00-31878mpkzmzx9.worf.replit.dev/api/hello"
      );
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
