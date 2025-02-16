import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

function RotatingBox(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  const [title, setTitle] = useState("orange");

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "red" : "yellow"} />
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <RotatingBox position={[-1.2, 0, 0]} />
        <RotatingBox position={[1.2, 0, 0]} />
      </Canvas>
    </>
  );
}

export default App;
