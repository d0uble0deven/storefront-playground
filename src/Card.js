import React from "react";
import CardCategory from "./CardCategory";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardSize from "./CardSize";
import CardHeart from "./CardHeart";

function Card({ data }) {
  return (
    <>
      <div className="card-container">
        <ul>
          <CardCategory category={data.category} />
          <CardImage image={data.image} />
          <CardTitle title={data.title} />
          <CardSize size={data.size} />
          <CardHeart heart={data.heart} />
        </ul>
      </div>
    </>
  );
}

export default Card;
