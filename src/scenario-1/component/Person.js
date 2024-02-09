import React from "react";
import avathar from "../logo.svg";

const Person = ({ name, nickName, images, onClick }) => {
  /* img = images
    ? images[0]
      ? images[0].small
        ? images.small.url
        : ""
      : ""
    : "";
*/
  const img = images?.[0]?.small?.url || avathar;
  return (
    <section>
      <h3>{name}</h3>
      {nickName && <p>nickName </p>}
      <img src={img} alt={name} style={{ width: "50px" }} />
      <p>
        <button onClick={onClick} className="btn">
          Remove
        </button>
      </p>
      <hr />
    </section>
  );
};

export default Person;
