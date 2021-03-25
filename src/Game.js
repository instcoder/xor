import "./styles.css";
import Board from "./components/Board";
import React, { useState } from "react";

function Game() {
  const [state, setState] = useState({
    move: 1,
    winner: "",
    isGameOver: false
  });

  let handler = (newState) => setState(newState);

  return (
    <div className="game">
      <div className="game-board">
        <Board moveCounter={handler} />
      </div>
      <div className="game-info">
        <div>{"Ход " + state.move}</div>
        {state.isGameOver ? (
          <div>{"Winner is " + state.winner}</div>
        ) : (
          <div></div>
        )}
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
export default Game;
