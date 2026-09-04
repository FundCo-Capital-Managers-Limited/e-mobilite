"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Node network representing a charging/mobility corridor grid
    const NODE_COUNT = 90;
    const RADIUS = 6.5;
    const positions = new Float32Array(NODE_COUNT * 3);
    const nodePositions: THREE.Vector3[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * RADIUS * 2,
        (Math.random() - 0.5) * RADIUS * 1.2,
        (Math.random() - 0.5) * RADIUS
      );
      nodePositions.push(v);
      positions[i * 3] = v.x;
      positions[i * 3 + 1] = v.y;
      positions[i * 3 + 2] = v.z;
    }

    const group = new THREE.Group();
    scene.add(group);

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0xd4ff3d,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    group.add(points);

    // Connect nearby nodes with faint lines
    const linePositions: number[] = [];
    const MAX_DIST = 2.6;
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < MAX_DIST) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePositions), 3)
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x17b364,
      transparent: true,
      opacity: 0.22,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    let mouseX = 0;
    let mouseY = 0;
    function onPointerMove(e: PointerEvent) {
      const rect = mount!.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    }
    mount.addEventListener("pointermove", onPointerMove);

    let frameId: number;
    const startTime = performance.now();

    function animate() {
      const t = (performance.now() - startTime) / 1000;
      if (!prefersReducedMotion) {
        group.rotation.y = t * 0.05 + mouseX * 0.3;
        group.rotation.x = mouseY * 0.15;
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      mount.removeEventListener("pointermove", onPointerMove);
      pointsGeo.dispose();
      pointsMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />;
}
