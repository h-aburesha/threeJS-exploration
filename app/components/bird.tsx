"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function MeshComponent() {
    const fileUrl = "/okamebird/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export function OkameBird() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Canvas className="h-2xl w-2xl">
                <OrbitControls />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <MeshComponent />
            </Canvas>
        </div>
    );
}
