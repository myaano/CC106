"use client";
import Modal from "./modal";
import { useState } from "react";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-poppins",
});

export default function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")



    const handleClose = () => {
      setUsername("");
      setPassword("");
      setError("");
      onClose();
  };
  

  const Submit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
      ``; 
    }


    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });




      if (!res.ok) throw new Error("Failed to submit");
      alert("Report submitted!");

      setUsername("");
      setPassword("");
    } catch (err) {
      setError(err.message)
    }

    
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={`${poppins.variable}`}>
        <div className=" text-[#3C3535] flex justify-start items-center text-3xl font-[500] h-12 font-poppins">
          <p>Admin ?</p>
        </div>

        {error && (
          <p className="text-red-500 mb-2 font-poppins text-lg">{error}</p>
        )}

        <form onSubmit={Submit} className="flex flex-col gap-4 font-poppins">
          <div className="w-full flex flex-col gap-2">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username :"
              type="text"
              className="border-2 border-[#0F1E59] rounded-lg pl-3 py-3"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password :"
              type="password"
              className="border-2 border-[#0F1E59] rounded-lg pl-3 py-3"
            />
          </div>
          <div className="flex justify-center items-center ">
            <button
              type="submit"
              className="bg-[#0F1E59] text-white py-3 rounded ursor-pointer transition-all duration-300 ease-in-out active:opacity-80 active:scale-95 active:brightness-110 px-3 "
            >
              adwadawdawd
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
