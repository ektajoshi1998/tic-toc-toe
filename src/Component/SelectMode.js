import React, { useState } from "react";

const SelectMode = ({onSelectMode}) => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" >
    <h1 className="text-3xl font-bold mb-4">Select Mode</h1>
    <div className="flex space-x-8">
    <button
        className="mb-6 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700"
        onClick={() => onSelectMode('player')}
      >
        Player Vs Player
      </button>
      <button
        className="mb-6 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700"
        onClick={() => onSelectMode('computer')}
      >
       Player Vs Computer
      </button>
    </div>
   
    </div>
  );
};

export default SelectMode;
