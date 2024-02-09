import React from "react";
import { people } from "../data";
import Person from "./Person";
const List = () => {
  return (
    <>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </>
  );
};

export default List;
