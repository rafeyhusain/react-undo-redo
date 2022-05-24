import React, { useState } from "react";
import Classmates from "./Classmates";
import NewClassmate from "./NewClassmate";
import Buttons from "./Buttons";
import { initialClassmates } from "./initialData";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [classmates, setClassmates] = useState(initialClassmates);
  const [undo, setUndo] = useState([]);
  const [redo, setRedo] = useState([]);

  const handleUndo = () => {
    if (undo.length === 0) {
      return;
    }

    console.log(undo.length, undo[0]);

    setRedo([undo[0], ...redo]);
    setClassmates([...undo[0]]);
    undo.splice(0, 1);
    setUndo([...undo]);
  };

  const handleRedo = () => {
    if (redo.length === 0) {
      return;
    }

    console.log(redo[0]);

    setUndo([redo[0], ...undo]);
    setClassmates([...redo[0]]);
    redo.splice(0, 1);
    setRedo([...redo]);
  };

  const addClassmate = (classmate) => {
    classmate.id = uuidv4();
    classmate.friend = false;
    setClassmates([classmate, ...classmates]);
    addUndo();
  };

  const addUndo = () => {
    setUndo([classmates, ...undo]);
    console.log(undo);
  };

  const toggleFriend = (classmate) => {
    const item = { ...classmate };
    item.friend = !classmate.friend;

    let i = 0;
    for (i = 0; i < classmates.length; i++) {
      if (item.id === classmates[i].id) {
        break;
      }
    }
    console.log(i, classmates.length);
    classmates.splice(i, 1);
    classmates.splice(i, 0, item);
    console.log(i, classmates.length);

    setClassmates([...classmates]);
    addUndo();
  };

  return (
    <div className="app" data-testid="app">
      <NewClassmate addClassmate={addClassmate} />
      <Buttons handleUndo={handleUndo} handleRedo={handleRedo} />
      <Classmates classmates={classmates} toggleFriend={toggleFriend} />
    </div>
  );
};

export default App;
