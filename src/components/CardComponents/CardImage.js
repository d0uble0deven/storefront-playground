import React from "react";

function CardImage({ image, handleClick }) {
  return (
    <>
      <img
        className="cardImage"
        onClick={() => handleClick("mock-param")}
        src={image}
        alt={image}
      ></img>
    </>
  );
}

export default CardImage;
