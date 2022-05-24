import React from "react";

const Classmate = ({ classmate, toggleFriend }) => {
  return (
    <article className="classmate" data-testid="classmate">
      <h3>{classmate.name}</h3>
      <div className="classmate-controls">
        <label className="classmate-friend">
          <input
            type="checkbox"
            checked={classmate.friend}
            onChange={() => {
              toggleFriend(classmate);
            }}
          />{" "}
          friend
        </label>
      </div>
    </article>
  );
};

export default Classmate;
