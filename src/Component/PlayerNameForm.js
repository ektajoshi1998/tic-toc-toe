import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Player = ({ mode }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const navigate = useNavigate();

  const handleStartGame = () => {
    
    if (mode === "player" && player1 && player2) {
      navigate("/game",{state:{mode:"player",player1, player2}});
    }
    if (mode === "computer" && player1) {
      navigate("/game",{state:{mode:"computer",player1}});
    }
  };

  return (
    <div className="text-center mt-40">
      <h2 className="text-3xl font-bold mb-4">Enter Player Name</h2>
      <div >
        <input
          type="text"
          placeholder="Player 1"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          className="mb-6 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 m-4"
        />
        {mode === "player" && (
          <input
            type="text"
            placeholder="Player 2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            className="mb-6 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 m-4"
          />
        )}
      </div>
      <button
        onClick={handleStartGame}
        className="mb-6 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
      >
        Start Game
      </button>
    </div>
  );
};

export default Player;
