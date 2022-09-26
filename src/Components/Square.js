import React from "react";

export const Square=({ chooseSquare, val }) =>{
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
}