import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

function Box(props) {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y + 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
}

const CanvasComponent = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <mesh receiveShadow position={[0, 0, -20]}>
      <planeBufferGeometry attach="geometry" args={[10000, 10000]} />
      <meshStandardMaterial attach="material" color="#171717" />
    </mesh>
    <Box position={[0, 0, 2]} />
    <Box position={[2.4, 0, 0]} />
  </Canvas>
);

export default CanvasComponent;
