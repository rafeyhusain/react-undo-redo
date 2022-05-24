import React, { useState } from "react";

const NewClassmate = ({ addClassmate }) => {
  const [name, setName] = useState("");

  return (
    <div className="new-classmate">
      <input
        data-testid="name-input"
        className="new-classmate-input"
        placeholder="Name"
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button onClick={() => addClassmate({ name })}>Add</button>
    </div>
  );
};

export default NewClassmate;
