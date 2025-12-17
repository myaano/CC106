"use client";

import { useState, useEffect } from "react";
import Modal from "./modal";
import { supabase } from "../../api/client.js";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-poppins",
});



const municipalitiesData = {
  Barcelona: [
    "Bangate",
    "Jibong",
    "Layog",
    "Luneta",
    "Macabari",
    "Mapapac",
    "Panghaluban",
    "Población Central",
    "Población Norte",
    "Población Sur",
    "San Isidro",
    "Tagdon",
  ],
  Bulan: [
    "Aguinaldo",
    "Bonga",
    "Butag",
    "Danao",
    "Inararan",
    "J. Gerona",
    "JP. Laurel",
    "Marinab",
    "Namo",
    "Nasuje",
    "Osmeña",
    "Otavi",
    "Quezon",
    "R. Gerona",
    "Sagrada",
    "San Rafael",
    "San Vicente",
    "Zone-1",
    "Zone-2",
    "Zone-4",
    "Zone-6",
    "Zone-7",
  ],
  "Bulusan": ["Cogon", "Dancalan", "Dapdap", "Lalud", "Mabuhay", "Porog", "Sabang", "San Antionio", "San Bernardo", "San Vicente", "Tinampo"],
  "Casiguran": ["Boton", "Central", "Colambis", "Lungib", "Ponong", "Rizal", "Santa Cruz", "Somal-ot", "Trece Martirez"],
  "Castilla": ["Bagalayag", "Bagong Silang", "Bonga", "Buenavista", "Cogon", "Dangcalan", "Libtong", "Macalaya", "Pandan", "Poblacion", "Quirapi", "Saclayan", "Tomalaytay", ""],
  "Donsol": [""]
};

const problemTypes = ["Flooding", "Garbage", "Road Damage", "Power Outage"];

export default function ReportModal({ isOpen, onClose }) {








  const [municipality, setMunicipality] = useState("");
  const [barangay, setBarangay] = useState("");
  const [problem, setProblem] = useState("");
  const [barangayOptions, setBarangayOptions] = useState([]);
  const [error, setError] = useState("");





    const handleClose = () => {
      setMunicipality("");
      setBarangay("");
      setProblem("");
      setError("");
      onClose();
    };






  // Update barangay options whenever municipality changes
  useEffect(() => {
    if (municipality) {
      setBarangayOptions(municipalitiesData[municipality]);
      setBarangay(""); // reset barangay when municipality changes
    } else {
      setBarangayOptions([]);
      setBarangay("");
    }
  }, [municipality]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for missing inputs
    if (!municipality || !barangay || !problem) {
      setError("Please fill in all fields.");
      return;``
    }

    try {
      // Example POST request
      const res = await fetch("", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ municipality, barangay, problem }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      alert("Report submitted!");
      // Reset fields
      setMunicipality("");
      setBarangay("");
      setProblem("");
      setError("");
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <p className="font-poppins text-[27px] font-semibold mb-4">
        Report a Problem ?
      </p>

      {error && (
        <p className="text-red-500 mb-2 font-poppins text-lg">{error}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className={`${poppins.variable} flex flex-col gap-4 font-poppins`}
      >
        <div className="w-full flex flex-col gap-2">
          <p>Municipality :</p>

          <select
            value={municipality}
            onChange={(e) => setMunicipality(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="" hidden>
              Select Municipality
            </option>
            {Object.keys(municipalitiesData).map((muni) => (
              <option key={muni} value={muni}>
                {muni}
              </option>
            ))}
          </select>
        </div>

        {/* this should have an error when clicked/touched that says "choose municipality first */}
        <div className="flex flex-col gap-2">
          <p>Baranggay :</p>
          <select
            value={barangay}
            onChange={(e) => setBarangay(e.target.value)}
            className="border rounded px-3 py-2"
            disabled={!municipality}
          >
            <option value="" hidden>
              Select Baranggay
            </option>
            {barangayOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <p>Type of Problem :</p>
          <select
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="" hidden>
              Select Problem Type
            </option>
            {problemTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-[#0F1E59] text-white py-2 rounded hover:bg-[#0F1E59]/50"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}
