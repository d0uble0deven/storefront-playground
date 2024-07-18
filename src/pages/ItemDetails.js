// src/pages/ItemDetails.js
import React from "react";
import { useParams } from "react-router-dom";

// import CardImage from "../components/CardComponents/CardImage";
// import CardCategory from "../components/CardComponents/CardCategory";
// import CardTitle from "../components/CardComponents/CardTitle";
// import CardSize from "../components/CardComponents/CardSize";
// import CardHeart from "../components/CardComponents/CardHeart";

function ItemDetails({ data }) {
  const { id } = useParams();

  const item = data.find((item) => item.id == id);
  //   const item = data.find((item, index) => index === parseInt(id, 10));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>Category: {item.category}</p>
      <img src={item.image} alt={item.title} />
      {/* <img src={image} alt={image}></img> */}
      <p>Size: {item.size}</p>
      <p>Heart: {item.heart ? "Yes" : "No"}</p>
      {/* <CardCategory category={item.category} />
      <CardImage image={item.image} />
      <CardTitle title={item.title} />
      <CardSize size={item.size} />
      <CardHeart heart={item.heart} /> */}
    </div>
  );
}

export default ItemDetails;
