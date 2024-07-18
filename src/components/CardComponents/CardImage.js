import React from "react";

function CardImage({ image }) {
  return (
    <>
      <img src={image} alt={image}></img>
    </>
  );
}

export default CardImage;
