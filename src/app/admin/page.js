"use client";


import { useEffect, useState } from "react";
import { supabase } from "../../api/client.js";

export default function Admin() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let { data: items, error } = await supabase
        .from("test_items")
        .select("*");
      if (error) {
        console.error("Error fetching:", error);
      } else {
        setData(items);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>My Supabase Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
