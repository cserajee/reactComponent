import React, { useState } from "react";
import person from "./data";
import User from "./User";
import "./index.css";

const BirthdayBuddy = () => {
  const [users, setUsers] = useState(person);

  return (
    <div className="container">
      <h3> Today {users.length} user Birthday </h3>
      <section>
        {users.map((user) => {
          return <User {...user} key={user.id} />;
        })}
      </section>
      {users.length > 1 ? (
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setUsers([])}
        >
          Clear All
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setUsers(person)}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default BirthdayBuddy;
