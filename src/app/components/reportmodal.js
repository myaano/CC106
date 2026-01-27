"use client";

import { useState, useEffect } from "react";
import Modal from "./modal";

import { toast } from "sonner"


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
  Bulusan: ["Cogon", "Dancalan", "Dapdap", "Lalud", "Mabuhay", "Porog", "Sabang", "San Antionio", "San Bernardo", "San Vicente", "Tinampo"],
  Casiguran: ["Boton", "Central", "Colambis", "Lungib", "Ponong", "Rizal", "Santa Cruz", "Somal-ot", "Trece Martirez"],
  Castilla: ["Bagalayag", "Bagong Silang", "Bonga", "Buenavista", "Cogon", "Dangcalan", "Libtong", "Macalaya", "Pandan", "Poblacion", "Quirapi", "Saclayan", "Tomalaytay", ""],
  Donsol: ["Dancalan", "Gura", "Gimagaan", "Ogod", "Pangpang", "San Rafael", "Santa Cruz", "Sibago", "Vinisitahan"],
  Gubat: [
    "Ariman", 
    "Bagacay", 
    "Balud Del Sur", 
    "Buenavista", 
    "Cogon", 
    "Cota na Daco", 
    "Ogao", 
    "Panganiban", 
    "Rizal", 
    "Tiris"],
  Juban: ["Binanuahan", "Biriran", "Carohayon", "Catanagan", "Embarcadero", "Sablayan Island", "Tinago", "Tughan"],
  Magallanes: ["Animbong", "Aguda Norte", "Aguda Sur", "Banacud", "Behia", "Binisitahan Del Norte", "Biton", "Biga", "Caditaan", "Cagbolo", "Cagtalaba", "Cawit Proper", "Ginangra", "Hubo", "Poblacion", "Tagas", "Salvacion"],
  Matnog: ["Bon-ot (Big)", "Bon-ot (Small)", "Calayuan", "Calintaan", "Caloocan", "Camachiles", "Camcaman", "Coron-Coron", "Culasi", "Genablan Occidental", "Genablan Oriental", "Mambajog", "Manurabi", "Panghuliran", "Poropandan", "Santa Isabel", "Sinalcaman", "Sinang-Atan", "Sua", "Tablac", "Tikling Island"],
};



const problemTypes = [
  "Improper Waste Management",
  "Livestock Littering",
  "Coral Reef Destruction",
  "Coastal Landslides",
];

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

  
  useEffect(() => {
    if (municipality) {
      setBarangayOptions(municipalitiesData[municipality]);
      setBarangay(""); 
    } else {
      setBarangayOptions([]);
      setBarangay("");
    }
  }, [municipality]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    const formData = {
      municipality : municipality,
      barangay : barangay,
      problem : problem,
    };


    try {

      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      toast.success("Report submitted successfully!");
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
