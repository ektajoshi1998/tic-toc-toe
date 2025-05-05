import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/mode");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
    >
      <h1 className=" text-3xl font-bold mb-4">Tic Tac Toe</h1>

      <button
        className="border bg-pink-700 w-32 h-14 text-white"
        onClick={() => handlePlayClick()}
      >
        Play ▶️
      </button>
    </div>
  );
};

export default HomePage;
