import React from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "./CardComponents/CardCategory";
import CardImage from "./CardComponents/CardImage";
import CardTitle from "./CardComponents/CardTitle";
import CardSize from "./CardComponents/CardSize";
import CardHeart from "./CardComponents/CardHeart";

function Card({ data, index }) {
  const navigate = useNavigate();

  const handleClick = (param) => {
    // console.log(event);
    console.log("Card - handleClick - mock-param: ", param);
    navigate(`/item/${index}`);
  };
  return (
    <>
      <div className="card-container" onClick={() => handleClick("mock-param")}>
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
