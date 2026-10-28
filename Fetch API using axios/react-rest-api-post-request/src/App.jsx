
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://fakestoreapi.com/products",
        {
          title: title,
          price: Number(price),
        }
      );

      setMessage(
        `Product "${res.data.title}" added successfully!`
      );

      console.log(res.data);

      setTitle("");
      setPrice("");
    } catch (error) {
      setMessage("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Add New Product</h1>

      <form onSubmit={handleSubmit}>
        <label>Product Title</label>
        <input
          type="text"
          placeholder="Enter product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Product Price</label>
        <input
          type="number"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
