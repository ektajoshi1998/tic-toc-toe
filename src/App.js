import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Player from "./Component/PlayerNameForm";
import Game from "./Component/Game";
import Computer from "./Component/Computer";
import Mode from "./Component/Mode";
import HomePage from "./Component/HomePage";

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/mode" element={<Mode/>}/>
      <Route path="/player" element={<Player/>}/>
      <Route path="/computer" element={<Computer/>}/>
      <Route path="/game" element={<Game/>}/>
      
    </Routes>
   </Router>
  );
}

export default App;
