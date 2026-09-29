import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles } from 'lucide-react';

export const InteractiveDrone3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0d0e, 0.05);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(4, 2.5, 5);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 8, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xb7ff45, 1.8);
    rimLight.position.set(-6, 3, -4);
    scene.add(rimLight);

    const bottomFill = new THREE.DirectionalLight(0x38bdf8, 0.4);
    bottomFill.position.set(0, -5, 0);
    scene.add(bottomFill);

    // 5. Materials
    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x181a1c,
      roughness: 0.35,
      metalness: 0.85,
    });

    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x2d3238,
      roughness: 0.25,
      metalness: 0.95,
    });

    const limeGlowMat = new THREE.MeshBasicMaterial({
      color: 0xb7ff45,
    });

    const redGlowMat = new THREE.MeshBasicMaterial({
      color: 0xff3b30,
    });

    const propMat = new THREE.MeshPhysicalMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.5,
    });

    const lensMat = new THREE.MeshPhysicalMaterial({
      color: 0x050505,
      roughness: 0.05,
      metalness: 0.9,
      transmission: 0.9,
      ior: 1.5,
    });

    // 6. Build Drone Model Hierarchy
    const droneGroup = new THREE.Group();

    // Central Fuselage
    const bodyGeo = new THREE.BoxGeometry(1.2, 0.38, 1.6);
    const bodyMesh = new THREE.Mesh(bodyGeo, carbonMat);
    bodyMesh.castShadow = true;
    droneGroup.add(bodyMesh);

    // Top Canopy Module (Aerospace Cover)
    const topCanopyGeo = new THREE.CylinderGeometry(0.45, 0.65, 0.22, 8);
    const topCanopy = new THREE.Mesh(topCanopyGeo, titaniumMat);
    topCanopy.position.y = 0.26;
    topCanopy.rotation.y = Math.PI / 4;
    droneGroup.add(topCanopy);

    // Tiny AmazingFly brand status light on top
    const topStatusGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.05, 16);
    const topStatus = new THREE.Mesh(topStatusGeo, limeGlowMat);
    topStatus.position.set(0, 0.38, 0.2);
    droneGroup.add(topStatus);

    // 4 Carbon Arms & Motors & Propellers
    const armPositions = [
      { x: 1.3, z: 1.3, light: limeGlowMat },   // Front-Right (Starboard Green)
      { x: -1.3, z: 1.3, light: redGlowMat },   // Front-Left (Port Red)
      { x: 1.3, z: -1.3, light: limeGlowMat },  // Rear-Right
      { x: -1.3, z: -1.3, light: redGlowMat },  // Rear-Left
    ];

    const propellers: THREE.Mesh[] = [];

    armPositions.forEach((pos) => {
      // Arm tube
      const armGeo = new THREE.CylinderGeometry(0.07, 0.07, 1.8, 16);
      const arm = new THREE.Mesh(armGeo, carbonMat);
      arm.position.set(pos.x * 0.5, 0, pos.z * 0.5);
      arm.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(pos.x, 0, pos.z).normalize()
      );
      arm.castShadow = true;
      droneGroup.add(arm);

      // Motor Bell
      const motorGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.25, 16);
      const motor = new THREE.Mesh(motorGeo, titaniumMat);
      motor.position.set(pos.x, 0.1, pos.z);
      motor.castShadow = true;
      droneGroup.add(motor);

      // Arm Tip Navigation LED
      const ledGeo = new THREE.SphereGeometry(0.06, 16, 16);
      const led = new THREE.Mesh(ledGeo, pos.light);
      led.position.set(pos.x * 1.08, 0.05, pos.z * 1.08);
      droneGroup.add(led);

      // Propeller Spinning Disc
      const propDiscGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.02, 32);
      const prop = new THREE.Mesh(propDiscGeo, propMat);
      prop.position.set(pos.x, 0.24, pos.z);
      droneGroup.add(prop);
      propellers.push(prop);
    });

    // Landing Skids (Carbon Gear)
    const legGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 12);
    [-0.55, 0.55].forEach((xSide) => {
      // Left/Right skid runner
      const runnerGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 12);
      const runner = new THREE.Mesh(runnerGeo, carbonMat);
      runner.position.set(xSide, -0.65, 0);
      runner.rotation.x = Math.PI / 2;
      runner.castShadow = true;
      droneGroup.add(runner);

      // Struts
      [-0.45, 0.45].forEach((zSide) => {
        const strut = new THREE.Mesh(legGeo, carbonMat);
        strut.position.set(xSide, -0.32, zSide);
        strut.rotation.z = xSide > 0 ? -0.25 : 0.25;
        strut.castShadow = true;
        droneGroup.add(strut);
      });
    });

    // Underside 3-Axis Gimbal Camera System
    const gimbalBase = new THREE.CylinderGeometry(0.18, 0.18, 0.15, 16);
    const gBaseMesh = new THREE.Mesh(gimbalBase, titaniumMat);
    gBaseMesh.position.set(0, -0.25, 0.45);
    droneGroup.add(gBaseMesh);

    const cameraBallGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const cameraBall = new THREE.Mesh(cameraBallGeo, carbonMat);
    cameraBall.position.set(0, -0.45, 0.45);
    cameraBall.castShadow = true;
    droneGroup.add(cameraBall);

    // Primary Camera Lens
    const lensGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 24);
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.set(0, -0.45, 0.72);
    lens.rotation.x = Math.PI / 2;
    droneGroup.add(lens);

    scene.add(droneGroup);

    // Soft Contact Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(8, 8);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.7;
    scene.add(shadowPlane);

    // 7. Mouse Drag Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = 0.4;
    let targetRotationX = 0.2;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;
      targetRotationX = Math.max(-0.5, Math.min(0.8, targetRotationX));
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;
      targetRotationX = Math.max(-0.5, Math.min(0.8, targetRotationX));
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle Rotation & Hover Bobbing
      if (isRotating && !isDragging) {
        targetRotationY += 0.004;
      }

      // Smooth damping interpolation
      droneGroup.rotation.y += (targetRotationY - droneGroup.rotation.y) * 0.06;
      droneGroup.rotation.x += (targetRotationX - droneGroup.rotation.x) * 0.06;
      droneGroup.position.y = Math.sin(elapsedTime * 2) * 0.06;

      // Spin propellers
      propellers.forEach((p) => {
        p.rotation.y += 0.45;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElement.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (containerRef.current && domElement) {
        containerRef.current.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, [isRotating]);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0D0E] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="tech-label text-[#B7FF45] mb-2">INTERACTIVE 3D CAD MODEL</div>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white">
              EXPLORE THE AIRFRAME
            </h2>
          </div>

          <p className="text-sm text-[#A6AAA9] font-mono-tech mt-4 md:mt-0 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B7FF45]" />
            DRAG TO ROTATE • TOUCH ENABLED
          </p>
        </div>

        {/* 3D Canvas Box */}
        <div className="relative w-full h-[500px] sm:h-[620px] rounded-3xl bg-gradient-to-b from-[#151819] to-[#0B0D0E] border border-white/10 shadow-2xl overflow-hidden group cursor-grab active:cursor-grabbing">
          {/* Three.js Canvas Mount */}
          <div ref={containerRef} className="w-full h-full" />

          {/* Floating UI HUD Overlay */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-xs font-mono-tech flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B7FF45] animate-pulse" />
              <span className="text-white">AMAZINGFLY ONE (CAD REV 4.2)</span>
            </div>
          </div>

          {/* Interactive Controls Overlay */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`px-4 py-2 rounded-xl backdrop-blur-md text-xs font-mono-tech flex items-center gap-2 transition-all ${
                isRotating
                  ? 'bg-[#B7FF45] text-[#0B0D0E] font-semibold'
                  : 'bg-black/60 text-white border border-white/10 hover:bg-black/90'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isRotating ? 'ROTATION ACTIVE' : 'ROTATION PAUSED'}</span>
            </button>
          </div>

          {/* Telemetry Corner Markers */}
          <div className="absolute bottom-6 left-6 text-[11px] font-mono-tech text-[#A6AAA9] hidden sm:block">
            <div>MASS: 4.8 KG (WITH PAYLOAD)</div>
            <div>AIRFRAME: CARBON FIBER MONOCOQUE</div>
            <div>ROTOR BLADES: DIRECT DRIVE FOLDING</div>
          </div>
        </div>
      </div>
    </section>
  );
};
