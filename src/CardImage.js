import React from "react";
import { Html } from "@react-three/drei";

function CardImage({ image }) {
  return (
    <>
      <img src={image} alt={image}></img>
    </>
  );
}

export default CardImage;
