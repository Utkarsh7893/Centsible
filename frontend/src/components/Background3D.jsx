import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleGroup = React.memo(() => {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(4000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#e62429"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
      <Points ref={useRef()} positions={useMemo(() => random.inSphere(new Float32Array(2000), { radius: 1.2 }), [])} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fbc02d"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
});

ParticleGroup.displayName = 'ParticleGroup';

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40 mix-blend-screen" style={{ touchAction: 'none' }}>
      <Canvas camera={{ position: [0, 0, 1] }} style={{ pointerEvents: 'none' }} frameloop="always">
        <ParticleGroup />
      </Canvas>
    </div>
  );
}
