import React from "react";
import CardCategory from "./CardComponents/CardCategory";
import CardImage from "./CardComponents/CardImage";
import CardTitle from "./CardComponents/CardTitle";
import CardSize from "./CardComponents/CardSize";
import CardHeart from "./CardComponents/CardHeart";

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
