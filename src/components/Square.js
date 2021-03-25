import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.ticTacer}>
      {props.sign}
    </button>
  );
}
export default Square;
