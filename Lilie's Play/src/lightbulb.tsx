import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const ref = useRef<THREE.Object3D>();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      if (ref.current) {
        ref.current.add(gltf.scene);
      }
    });
  }, [url]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={ref} object={new THREE.Group()} />;
}

export function Lightbulb({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <div className="lightbulb-container" onClick={toggleTheme} style={{ width: '100px', height: '100px', cursor: 'pointer' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model url="/lightbulb.glb" />
      </Canvas>
    </div>
  );
}
