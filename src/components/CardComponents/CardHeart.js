import React from "react";

function CardHeart({ heart }) {
  return (
    <>
      <li className="heart">{heart ? "x" : "y"}</li>
    </>
  );
}

export default CardHeart;
