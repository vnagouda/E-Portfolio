import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleField from '../canvas/ParticleField';
import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ParticleBackground({ scrollContainerRef }) {
  const scrollVelocity = useMotionValue(0);
  const direction = useRef(1);
  const [isScrolling, setIsScrolling] = useState(false);

  let lastScroll = 0;

  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) return;

    const onScroll = () => {
      const v = container.scrollTop;
      const delta = v - lastScroll;

      if (delta > 0) direction.current = 1;
      else if (delta < 0) direction.current = -1;

      const clamped = Math.max(-2, Math.min(2, delta));
      scrollVelocity.set(clamped);
      setIsScrolling(true);
      lastScroll = v;

      clearTimeout(window.scrollStopTimer);
      window.scrollStopTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [scrollContainerRef, scrollVelocity]);

  const smooth = useSpring(scrollVelocity, { stiffness: 40, damping: 12 });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingParticles isScrolling={isScrolling} velocity={smooth} direction={direction} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

function RotatingParticles({ velocity, direction, isScrolling }) {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    const scrollBoost = velocity.get() * 0.002;
    const baseSpeed = 0.003 * direction.current;
    const finalSpeed = isScrolling ? scrollBoost + baseSpeed : baseSpeed;
    groupRef.current.rotation.x += finalSpeed;
    groupRef.current.rotation.y += finalSpeed;
  });

  return <group ref={groupRef}><ParticleField /></group>;
}
