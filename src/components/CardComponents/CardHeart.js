import React, { useState } from "react";

function CardHeart({ heart }) {
  const [isFavorite, setIsFavorite] = useState(heart);

  const favorite = "/images/favorite.png";
  const unfavorite = "/images/unfavorite.png";

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log("handleToggleFavorite - item.heart:", !isFavorite);
  };

  return (
    <>
      {
        <img
          className="heart"
          onClick={handleToggleFavorite}
          src={isFavorite ? favorite : unfavorite}
          alt={isFavorite ? "favorite" : "unfavorite"}
        ></img>
      }
    </>
  );
}

export default CardHeart;
