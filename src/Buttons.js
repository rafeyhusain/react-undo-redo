import React from "react";

const Buttons = ({ handleUndo, handleRedo }) => {
  return (
    <div className="buttons">
      <button data-testid="undo-button" onClick={() => handleUndo()}>
        Undo
      </button>
      <button data-testid="redo-button" onClick={() => handleRedo()}>
        Redo
      </button>
    </div>
  );
};

export default Buttons;
