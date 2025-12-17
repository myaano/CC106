"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../api/client.js";

export default function Test() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Get form values

    const name = e.target.name.value;

    // Insert into Supabase
    const { data, error } = await supabase
      .from("test_items") // Your table name
      .insert([
        {
          name: name,
        },
      ])
      .select();

    if (error) {
      console.error("Error:", error);
      setMessage("Error: " + error.message);
    } else {
      console.log("Success:", data);
      setMessage("Data submitted successfully!");
      e.target.reset(); // Clear form
    }

    setLoading(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
