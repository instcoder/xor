import Square from "./Square";
import React, { useState, useEffect } from "react";

const winPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function Board(props) {
  const [state, setState] = useState({
    isGameOver: false,
    winner: null,
    isX: true,
    sign: "",
    move: 1,
    battleField: [null, null, null, null, null, null, null, null, null],
    history: []
  });

  function renderSquare(i) {
    let sign = state.battleField[i];
    return <Square ticTacer={() => ticTacer(i)} sign={sign} />;
  }

  function checkForWin(currBoard) {
    let currField = winPositions.map((triple) =>
      triple.map((el) => currBoard[el])
    );

    let count = (arr) => {
      let sign = state.move % 2 == 0 ? "0" : "X";
      let comparedArr = arr.filter((item) => item == sign);
      return comparedArr.length;
    };

    let result = currField.filter((triple) => count(triple) == 3);
    return result;
    // if (result.length && !state.isGameOver) {
    //   let newWinner = result[0][0]
    //   setState({...state, isGameOver: true, winner: newWinner });
    //   props.moveCounter({...state, isGameOver: true, winner: newWinner });
    //   console.log(state.winner);

    // }
  }

  function ticTacer(i) {
    // let newMass = [...state.history[state.history.length - 1]];
    let newField = [...state.battleField];

    if (checkForWin(state.battleField).length == 1) {
      console.log("ty ne projdesh!");
      return;
    }

    if (!newField[i]) {
      newField[i] = state.move % 2 == 0 ? "0" : "X";
      let newTurn = state.move + 1;
      //let newHistory = [...state.history, newMass];
      setState({ ...state, move: newTurn, battleField: newField });
      props.moveCounter({ ...state, move: newTurn });

      console.log(state.battleField);
    }
  }

  const status = `Next player: ${state.move % 2 == 0 ? "0" : "X"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
