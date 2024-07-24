import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "./CardComponents/CardCategory";
import CardImage from "./CardComponents/CardImage";
import CardTitle from "./CardComponents/CardTitle";
import CardSize from "./CardComponents/CardSize";
import CardHeart from "./CardComponents/CardHeart";

function Card({ data }) {
  const navigate = useNavigate();

  const handleClick = (param) => {
    startTransition(() => {
      // console.log(event);
      console.log("Card - handleClick - mock-param: ", param);
      navigate(`/item/${data.id}`);
    });
  };

  return (
    <>
      <div className="card-container">
        <ul>
          <CardCategory category={data.category} handleClick={handleClick} />
          <CardImage image={data.image} handleClick={handleClick} />
          <CardTitle title={data.title} handleClick={handleClick} />
          <CardSize size={data.size} handleClick={handleClick} />
          <CardHeart heart={data.heart} />
        </ul>
      </div>
    </>
  );
}

export default Card;
