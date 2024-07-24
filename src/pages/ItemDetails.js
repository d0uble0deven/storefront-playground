// src/pages/ItemDetails.js
import React, { Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls, Html } from "@react-three/drei";

import CardDetails from "../components/CardDetails";

function ItemDetails({ data }) {
  const { id } = useParams();

  const [isFavorite, setIsFavorite] = useState(false);
  const [nutritionalFacts, setNutritionalFacts] = useState([]);

  useEffect(() => {
    setNutritionalFacts(nutritionalData);

    const item = data.find((item) => item.id === parseInt(id, 10));
    if (item) {
      setIsFavorite(item.heart);
    }
  }, [id, data]);

  const item = data.find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  const modelPath = item.model;
  console.log("ItemDetails - modelPath: ", modelPath);

  if (typeof modelPath !== "string") {
    console.error("Model path is not a string:", modelPath);
    return <h2>Invalid model path</h2>;
  }

  const nutritionalData = [
    { key: "Calories", value: "259.3" },
    { key: "Total Fat", value: "10.0 g" },
    { key: "Saturated Fat", value: "3.5 g" },
    { key: "Polyunsaturated Fat", value: "0.2 g" },
    { key: "Monounsaturated Fat", value: "1.2 g" },
    { key: "Cholesterol", value: "47.2 mg" },
    { key: "Sodium", value: "529.6 mg" },
    { key: "Potassium", value: "213.4 mg" },
    { key: "Total Carbohydrate", value: "27.1 g" },
    { key: "Dietary Fiber", value: "4.4 g" },
    { key: "Sugars", value: "2.3 g" },
    { key: "Protein", value: "17.0 g" },
    { key: "Vitamin A", value: "16.3 %" },
    { key: "Vitamin B-12", value: "1.0 %" },
    { key: "Vitamin B-6", value: "2.4 %" },
    { key: "Vitamin C", value: "40.7 %" },
    { key: "Vitamin D", value: "0.2 %" },
    { key: "Vitamin E", value: "0.8 %" },
    { key: "Calcium", value: "5.7 %" },
    { key: "Copper", value: "1.0 %" },
    { key: "Folate", value: "1.6 %" },
    { key: "Iron", value: "14.5 %" },
    { key: "Magnesium", value: "1.2 %" },
    { key: "Manganese", value: "1.6 %" },
    { key: "Niacin", value: "0.7 %" },
    { key: "Pantothenic Acid", value: "0.7 %" },
    { key: "Phosphorus", value: "4.3 %" },
    { key: "Riboflavin", value: "2.1 %" },
    { key: "Selenium", value: "1.6 %" },
    { key: "Thiamin", value: "1.2 %" },
    { key: "Zinc", value: "1.7 %" },
  ];

  const favorite = "/images/favorite.png";
  const unfavorite = "/images/unfavorite.png";

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log("handleToggleFavorite - item.heart:", !isFavorite);
  };

  return (
    <div style={{ padding: "1vh 12.5vw" }}>
      <div className="column-container">
        <div className="column1">
          <h1>{item.title}</h1>
          <div className="canvas-container">
            <Suspense fallback={<div>Loading model...</div>}>
              <Canvas>
                <Html>
                  <img
                    onClick={handleToggleFavorite}
                    style={{
                      position: "absolute",
                      left: "20vw",
                      bottom: "10vh",
                      height: "10vh",
                      width: "5vw",
                    }}
                    src={isFavorite ? favorite : unfavorite}
                    alt={isFavorite ? "favorite" : "unfavorite"}
                  ></img>
                </Html>
                {/* <Canvas style={{ height: "500px" }}> */}
                <ModelLoader modelPath={modelPath} />
                <OrbitControls />
              </Canvas>
            </Suspense>
          </div>
        </div>
        <div className="column2">
          <div className="productDetails-container">
            <p>Category: {item.category}</p>
            {/* <img src={item.image} alt={item.title} /> */}
            <p>Size: {item.size}</p>
            <p>Price: $11.99</p>
            <p>Reviews: 5 Stars (112 reviews)</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="cardDetails-list">
        {nutritionalFacts.map((item, index) => (
          <CardDetails key={index} nutritionalData={item}></CardDetails>
        ))}
      </div>
    </div>
  );
}

function ModelLoader({ modelPath }) {
  const gltfLoader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/draco-gltf/");
  gltfLoader.setDRACOLoader(dracoLoader);

  const model = useLoader(GLTFLoader, modelPath, (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });

  return model ? (
    <primitive object={model.scene} />
  ) : (
    <div>Model not found</div>
  );
}

export default ItemDetails;
