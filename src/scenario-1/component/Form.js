import React from "react";
import { data } from "../../data";
import { useState } from "react";
import Person from "./Person";

const Form = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setUsers([...users, { id: Date.now(), name: name }]);
      setName("");
    }
    console.log(users);
  };
  const handleRemove = (id) => {
    setUsers(users.filter((person) => person.id !== id));
  };
  return (
    <>
      <div className="form">
        <div className="form-row">
          <label className="form-label" htmlFor="name" />
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <button
            type="submit"
            className="btn btn-block"
            onClick={handleSubmit}
          >
            Sumbit
          </button>
        </div>
      </div>
      <div className="container">
        {users.map((user) => {
          return (
            <Person
              {...user}
              key={user.id}
              onClick={() => handleRemove(user.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Form;
