import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Animated 3D points field with gentle motion and color shifting
const BackgroundCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Points geometry
    const particles = 1200;
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particles; i++) {
      // golden spiral distribution
      const t = i / particles;
      const radius = 250 * Math.sqrt(t) + Math.random() * 25;
      const angle = t * Math.PI * 12;
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 120;
      const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // warm African palette
      color.setHSL(0.10 + 0.12 * t, 0.7, 0.45);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 2.2, vertexColors: true, transparent: true, opacity: 0.75 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Subtle ambient light swirl
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      points.rotation.y += 0.0008 + mouseX * 0.0006;
      points.rotation.x = THREE.MathUtils.lerp(points.rotation.x, mouseY * 0.2, 0.03);
      const t = performance.now() * 0.00015;
      material.size = 2.0 + Math.sin(t) * 0.6;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
      style={{ filter: 'saturate(110%) blur(0.2px)' }}
    />
  );
};

export default BackgroundCanvas;


