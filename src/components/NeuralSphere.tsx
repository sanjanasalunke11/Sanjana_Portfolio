import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NeuralSphereProps {
  className?: string;
}

export const NeuralSphere: React.FC<NeuralSphereProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      // Fallback if WebGL fails
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for rotation
    const group = new THREE.Group();
    scene.add(group);

    // 1. Generate Sphere Nodes (Fibonacci sphere distribution)
    const nodeCount = 75;
    const radius = 70;
    const nodePositions: THREE.Vector3[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      nodePositions.push(new THREE.Vector3(x * radius, y * radius, z * radius));
    }

    // Node Points Mesh
    const nodesGeometry = new THREE.BufferGeometry().setFromPoints(nodePositions);
    const nodesMaterial = new THREE.PointsMaterial({
      color: 0xD8B4FE,
      size: 4.5,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const nodesPoints = new THREE.Points(nodesGeometry, nodesMaterial);
    group.add(nodesPoints);

    // 2. Interconnected Synaptic Lines
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const colorViolet = new THREE.Color(0xA855F7);
    const colorPurple = new THREE.Color(0x7929DB);

    const connectionDistance = 42;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < connectionDistance) {
          linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
          linePositions.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);

          // Alpha fade by distance
          const alpha = 1 - dist / connectionDistance;
          const c = colorViolet.clone().lerp(colorPurple, alpha * 0.5);
          lineColors.push(c.r, c.g, c.b, alpha * 0.4);
          lineColors.push(c.r, c.g, c.b, alpha * 0.4);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9333ea,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(linesMesh);

    // 3. Orbiting Data Stream Particles
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      const pRadius = radius + (Math.random() - 0.5) * 35;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phiAngle = Math.acos(2.0 * v - 1.0);
      const sinPhi = Math.sin(phiAngle);

      particlePositions[i * 3] = pRadius * sinPhi * Math.cos(theta);
      particlePositions[i * 3 + 1] = pRadius * sinPhi * Math.sin(theta);
      particlePositions[i * 3 + 2] = pRadius * Math.cos(phiAngle);

      particleSpeeds.push(0.005 + Math.random() * 0.01);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xA855F7,
      size: 2.2,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particleSystem);

    // Subtle Core Glow
    const coreGeo = new THREE.SphereGeometry(18, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x7929DB,
      transparent: true,
      opacity: 0.15,
      wireframe: true
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      mouseX = (x / rect.width) * 2;
      mouseY = (y / rect.height) * 2;

      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (!prefersReducedMotion) {
        // Continuous gentle rotation
        group.rotation.y += 0.003;
        group.rotation.x += 0.001;

        // Damping toward mouse interaction
        group.rotation.y += (targetRotationY - group.rotation.y) * 0.04;
        group.rotation.x += (targetRotationX - group.rotation.x) * 0.04;

        // Pulse core
        const pulse = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.08;
        core.scale.set(pulse, pulse, pulse);

        // Orbit data particles
        particleSystem.rotation.y -= 0.004;
        particleSystem.rotation.z += 0.002;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`relative w-full h-full min-h-[340px] flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
};
