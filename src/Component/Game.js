import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const initialBoard = () => Array(9).fill(null);

  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinenr] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  const location = useLocation();
  const {
    mode,
    player1 = "player1",
    player2 = "player2",
  } = location.state || {};

  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const playerName1 = player1 || "PlayerX";
  const playerName2 = mode === "computer" ? "Computer" : player2 || "PlayerO";

  const CalculateWinner = (currentBoard) => {
    for (let pattern of WINNING_PATTERN) {
      const [a, b, c] = pattern;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return { winner: currentBoard[a], line: pattern };
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    const result = CalculateWinner(newBoard);

    if (result) {
      setWinenr(result.winner);
      setWinningLine(result.line);
    }

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const computerMove = ()=>{
    const available = board
    .map((val,idx)=>(val===null ? idx : null))
    .filter((val)=>val!==null);

    if(available.length===0 || winner) {
      return;
    }

    const randomIndex = available[Math.floor(Math.random() *available.length)];
    handleClick(randomIndex);
  }


  useEffect(()=>{
    if(mode==='computer' && !isXNext && !winner){
      const timeout = setTimeout(computerMove,700);
      return()=>clearTimeout(timeout);
    }
  },[isXNext,winner,board,mode])

  const getStatusMessage = () => {
    if (winner) {
      const winnerName = winner === 'X' ? playerName1: playerName2;
      return`${winnerName} wins!!`
    }
    if(!board.includes(null)){
      return "Its a draw!!"
    }
    const currentName = isXNext ? playerName1 : playerName2;
    return `${currentName}'s  turn`;
  };

  const handleResetGame = () => {
    setBoard(initialBoard());
    setIsXNext(isXNext);
    setWinenr(null);
    setWinningLine([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="text-lg font-medium mb-2">{getStatusMessage()}</div>
      <button
        className="mb-6 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700"
        onClick={handleResetGame}
      >
        Reset Game
      </button>

      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => {
          const isWinningValue = winningLine.includes(index);
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={value !== null || winner}
              className={`w-20 h-20 text-2xl font-bold rounded border-2 border-gray-400 
                flex items-center justify-center
                ${
                  isWinningValue
                    ? "bg-green-300 text-black"
                    : "bg-white hover:bg-gray-200"
                }
                ${
                  value !== null || winner
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }
              `}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
