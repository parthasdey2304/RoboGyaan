"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RobotScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const wireMaterial = (color: number, opacity = 0.45) =>
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity,
      });

    const solidMaterial = (color: number, opacity = 0.15) =>
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        side: THREE.DoubleSide,
      });

    const boardMaterial = (color: number) =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.7,
        metalness: 0.2,
        transparent: true,
        opacity: 0.95,
      });

    const pinMaterial = (color: number) =>
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 });

    const ledMaterial = (color: number) =>
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8 });

    const core = new THREE.Group();
    const icosa = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.5, 1),
      wireMaterial(0x22d3ee, 0.6)
    );
    core.add(icosa);

    const innerGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.7, 32, 32),
      solidMaterial(0x22d3ee, 0.08)
    );
    core.add(innerGlow);

    mainGroup.add(core);

    const rings: THREE.Mesh[] = [];
    const ringConfigs = [
      { radius: 2.6, tube: 0.05, color: 0xa78bfa, rotX: Math.PI / 2.2, speed: 0.18 },
      { radius: 3.2, tube: 0.035, color: 0xfacc15, rotX: Math.PI / 1.7, rotY: 0.4, speed: -0.12 },
      { radius: 3.8, tube: 0.025, color: 0x22d3ee, rotX: Math.PI / 2.8, rotY: -0.3, speed: 0.09 },
    ];

    ringConfigs.forEach((cfg) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 100),
        wireMaterial(cfg.color, 0.55)
      );
      ring.rotation.x = cfg.rotX;
      if (cfg.rotY) ring.rotation.y = cfg.rotY;
      ring.userData = { speed: cfg.speed };
      rings.push(ring);
      mainGroup.add(ring);
    });

    const light1 = new THREE.DirectionalLight(0x22d3ee, 1.5);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xa78bfa, 1);
    light2.position.set(-5, 3, -5);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xfacc15, 0.8);
    light3.position.set(0, -5, 5);
    scene.add(light3);

    const ambient = new THREE.AmbientLight(0x404060, 0.6);
    scene.add(ambient);

    function createMicroBit(): THREE.Group {
      const group = new THREE.Group();
      const boardGeo = new THREE.BoxGeometry(0.6, 0.04, 0.5);
      const board = new THREE.Mesh(boardGeo, boardMaterial(0x1a1a2e));
      group.add(board);

      const ledGroup = new THREE.Group();
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          const led = new THREE.Mesh(
            new THREE.BoxGeometry(0.045, 0.02, 0.045),
            ledMaterial(0x22d3ee)
          );
          led.position.set(
            (x - 2) * 0.07,
            0.035,
            (y - 2) * 0.07
          );
          ledGroup.add(led);
        }
      }
      ledGroup.position.set(0, 0, -0.05);
      group.add(ledGroup);

      const btnGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.025, 12);
      const btnMat = boardMaterial(0x333344);
      const btnA = new THREE.Mesh(btnGeo, btnMat);
      btnA.position.set(-0.22, 0.04, 0.18);
      btnA.rotation.x = Math.PI / 2;
      group.add(btnA);

      const btnB = new THREE.Mesh(btnGeo, btnMat);
      btnB.position.set(0.22, 0.04, 0.18);
      btnB.rotation.x = Math.PI / 2;
      group.add(btnB);

      const edgeGeo = new THREE.BoxGeometry(0.58, 0.03, 0.04);
      const edgeMat = pinMaterial(0xfacc15);
      const edge = new THREE.Mesh(edgeGeo, edgeMat);
      edge.position.set(0, 0.02, 0.25);
      group.add(edge);

      return group;
    }

    function createRaspberryPi(): THREE.Group {
      const group = new THREE.Group();
      const boardGeo = new THREE.BoxGeometry(1.1, 0.05, 0.7);
      const board = new THREE.Mesh(boardGeo, boardMaterial(0x0d4a1e));
      group.add(board);

      const gpioGeo = new THREE.BoxGeometry(0.12, 0.07, 1.0);
      const gpio = new THREE.Mesh(gpioGeo, boardMaterial(0x1a1a2e));
      gpio.position.set(0.55, 0.04, 0);
      group.add(gpio);

      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 2; j++) {
          const pin = new THREE.Mesh(
            new THREE.CylinderGeometry(0.006, 0.006, 0.04, 6),
            pinMaterial(0xfacc15)
          );
          pin.position.set(
            0.59,
            0.08,
            (i - 9.5) * 0.05
          );
          group.add(pin);
        }
      }

      const usbGeo = new THREE.BoxGeometry(0.15, 0.04, 0.08);
      const usbMat = boardMaterial(0x1a1a2e);
      for (let i = 0; i < 4; i++) {
        const usb = new THREE.Mesh(usbGeo, usbMat);
        usb.position.set(-0.55, 0.035, -0.2 + i * 0.15);
        group.add(usb);
      }

      const hdmiGeo = new THREE.BoxGeometry(0.12, 0.03, 0.08);
      const hdmi1 = new THREE.Mesh(hdmiGeo, boardMaterial(0x1a1a2e));
      hdmi1.position.set(-0.55, 0.035, 0.25);
      group.add(hdmi1);

      const hdmi2 = new THREE.Mesh(hdmiGeo, boardMaterial(0x1a1a2e));
      hdmi2.position.set(-0.55, 0.035, 0.33);
      group.add(hdmi2);

      const pwrGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.06, 8);
      const pwr = new THREE.Mesh(pwrGeo, pinMaterial(0xfacc15));
      pwr.position.set(-0.4, 0.05, 0.3);
      group.add(pwr);

      const chipGeo = new THREE.BoxGeometry(0.2, 0.03, 0.2);
      const chip = new THREE.Mesh(chipGeo, boardMaterial(0x2a2a3e));
      chip.position.set(0.2, 0.04, -0.15);
      group.add(chip);

      return group;
    }

    function createArduinoUno(): THREE.Group {
      const group = new THREE.Group();
      const boardGeo = new THREE.BoxGeometry(0.95, 0.05, 0.65);
      const board = new THREE.Mesh(boardGeo, boardMaterial(0x0a3d1a));
      group.add(board);

      const headerColor = 0x0a3d1a;
      const pinHeaderMat = boardMaterial(headerColor);

      const leftHeader = new THREE.BoxGeometry(0.08, 0.07, 0.58);
      const left = new THREE.Mesh(leftHeader, pinHeaderMat);
      left.position.set(-0.45, 0.05, 0);
      group.add(left);

      const rightHeader = new THREE.BoxGeometry(0.08, 0.07, 0.58);
      const right = new THREE.Mesh(rightHeader, pinHeaderMat);
      right.position.set(0.45, 0.05, 0);
      group.add(right);

      for (let i = 0; i < 14; i++) {
        const pin = new THREE.Mesh(
          new THREE.CylinderGeometry(0.005, 0.005, 0.04, 6),
          pinMaterial(0xfacc15)
        );
        pin.position.set(-0.45, 0.095, -0.26 + i * 0.042);
        group.add(pin);
      }

      for (let i = 0; i < 6; i++) {
        const pin = new THREE.Mesh(
          new THREE.CylinderGeometry(0.005, 0.005, 0.04, 6),
          pinMaterial(0xfacc15)
        );
        pin.position.set(0.45, 0.095, -0.1 + i * 0.042);
        group.add(pin);
      }

      const usbGeo = new THREE.BoxGeometry(0.12, 0.04, 0.07);
      const usb = new THREE.Mesh(usbGeo, boardMaterial(0x1a1a2e));
      usb.position.set(-0.45, 0.035, 0.3);
      group.add(usb);

      const pwrJack = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, 0.06, 8),
        pinMaterial(0xfacc15)
      );
      pwrJack.position.set(-0.45, 0.05, -0.3);
      group.add(pwrJack);

      const resetBtn = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, 0.02, 12),
        boardMaterial(0x333344)
      );
      resetBtn.position.set(0.38, 0.04, 0.28);
      resetBtn.rotation.x = Math.PI / 2;
      group.add(resetBtn);

      const icspsGeo = new THREE.BoxGeometry(0.06, 0.03, 0.06);
      const icsps = new THREE.Mesh(icspsGeo, pinHeaderMat);
      icsps.position.set(0.38, 0.04, -0.25);
      group.add(icsps);

      const chip = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.03, 0.3),
        boardMaterial(0x2a2a3e)
      );
      chip.position.set(0, 0.04, -0.05);
      group.add(chip);

      return group;
    }

    function createESP32(): THREE.Group {
      const group = new THREE.Group();
      const boardGeo = new THREE.BoxGeometry(0.55, 0.04, 0.35);
      const board = new THREE.Mesh(boardGeo, boardMaterial(0x0d1a3d));
      group.add(board);

      const headerMat = boardMaterial(0x1a1a2e);
      const leftHeader = new THREE.BoxGeometry(0.06, 0.06, 0.3);
      const left = new THREE.Mesh(leftHeader, headerMat);
      left.position.set(-0.28, 0.05, 0);
      group.add(left);

      const rightHeader = new THREE.BoxGeometry(0.06, 0.06, 0.3);
      const right = new THREE.Mesh(rightHeader, headerMat);
      right.position.set(0.28, 0.05, 0);
      group.add(right);

      for (let i = 0; i < 18; i++) {
        const pin = new THREE.Mesh(
          new THREE.CylinderGeometry(0.004, 0.004, 0.035, 6),
          pinMaterial(0xfacc15)
        );
        pin.position.set(-0.28, 0.09, -0.135 + i * 0.016);
        group.add(pin);
      }

      for (let i = 0; i < 18; i++) {
        const pin = new THREE.Mesh(
          new THREE.CylinderGeometry(0.004, 0.004, 0.035, 6),
          pinMaterial(0xfacc15)
        );
        pin.position.set(0.28, 0.09, -0.135 + i * 0.016);
        group.add(pin);
      }

      const usbGeo = new THREE.BoxGeometry(0.08, 0.03, 0.05);
      const usb = new THREE.Mesh(usbGeo, boardMaterial(0x1a1a2e));
      usb.position.set(-0.28, 0.035, 0.18);
      group.add(usb);

      const antennaGeo = new THREE.BoxGeometry(0.12, 0.02, 0.12);
      const antenna = new THREE.Mesh(antennaGeo, boardMaterial(0x1a1a2e));
      antenna.position.set(0.25, 0.04, 0.15);
      group.add(antenna);

      const chip = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.02, 0.18),
        boardMaterial(0x2a2a3e)
      );
      chip.position.set(0, 0.035, 0);
      group.add(chip);

      return group;
    }

    function createBananaPi(): THREE.Group {
      const group = new THREE.Group();
      const boardGeo = new THREE.BoxGeometry(1.0, 0.05, 0.75);
      const board = new THREE.Mesh(boardGeo, boardMaterial(0x1a0d3d));
      group.add(board);

      const gpioGeo = new THREE.BoxGeometry(0.12, 0.07, 1.0);
      const gpio = new THREE.Mesh(gpioGeo, boardMaterial(0x1a1a2e));
      gpio.position.set(0.5, 0.04, 0);
      group.add(gpio);

      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 2; j++) {
          const pin = new THREE.Mesh(
            new THREE.CylinderGeometry(0.006, 0.006, 0.04, 6),
            pinMaterial(0xfacc15)
          );
          pin.position.set(0.54, 0.08, (i - 9.5) * 0.05);
          group.add(pin);
        }
      }

      const usbGeo = new THREE.BoxGeometry(0.15, 0.04, 0.08);
      const usbMat = boardMaterial(0x1a1a2e);
      for (let i = 0; i < 2; i++) {
        const usb = new THREE.Mesh(usbGeo, usbMat);
        usb.position.set(-0.5, 0.035, -0.15 + i * 0.3);
        group.add(usb);
      }

      const ethGeo = new THREE.BoxGeometry(0.18, 0.04, 0.1);
      const eth = new THREE.Mesh(ethGeo, boardMaterial(0x1a1a2e));
      eth.position.set(-0.5, 0.035, 0.2);
      group.add(eth);

      const hdmiGeo = new THREE.BoxGeometry(0.12, 0.03, 0.08);
      const hdmi = new THREE.Mesh(hdmiGeo, boardMaterial(0x1a1a2e));
      hdmi.position.set(-0.5, 0.035, 0.32);
      group.add(hdmi);

      const sataGeo = new THREE.BoxGeometry(0.12, 0.03, 0.08);
      const sata = new THREE.Mesh(sataGeo, boardMaterial(0x1a1a2e));
      sata.position.set(-0.5, 0.035, 0.42);
      group.add(sata);

      const chip = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.03, 0.22),
        boardMaterial(0x2a2a3e)
      );
      chip.position.set(0.15, 0.04, -0.15);
      group.add(chip);

      return group;
    }

    const boards = [
      { create: createMicroBit, radius: 4.2, angle: 0, speed: 0.22, yOff: 0.8, color: 0x22d3ee, name: "micro:bit" },
      { create: createRaspberryPi, radius: 4.6, angle: Math.PI * 0.3, speed: 0.16, yOff: -0.5, color: 0xfacc15, name: "Raspberry Pi" },
      { create: createArduinoUno, radius: 4.0, angle: Math.PI * 0.65, speed: 0.2, yOff: 0.3, color: 0x4ade80, name: "Arduino Uno" },
      { create: createESP32, radius: 4.8, angle: Math.PI * 1.1, speed: 0.18, yOff: -0.8, color: 0xa78bfa, name: "ESP32" },
      { create: createBananaPi, radius: 4.4, angle: Math.PI * 1.55, speed: 0.14, yOff: 0.6, color: 0xf472b6, name: "Banana Pi" },
      { create: createMicroBit, radius: 4.5, angle: Math.PI * 1.9, speed: 0.24, yOff: -0.3, color: 0x22d3ee, name: "micro:bit" },
      { create: createRaspberryPi, radius: 4.1, angle: Math.PI * 2.2, speed: 0.17, yOff: 0.9, color: 0xfacc15, name: "Raspberry Pi" },
      { create: createArduinoUno, radius: 4.7, angle: Math.PI * 2.6, speed: 0.19, yOff: -0.6, color: 0x4ade80, name: "Arduino Uno" },
    ];

    const satellites: THREE.Group[] = [];
    boards.forEach((cfg) => {
      const board = cfg.create();
      board.userData = {
        angle: cfg.angle,
        radius: cfg.radius,
        speed: cfg.speed,
        yOff: cfg.yOff,
        rotSpeed: { x: 0.4, y: 0.3, z: 0.2 },
        color: cfg.color,
      };
      satellites.push(board);
      mainGroup.add(board);
    });

    const starGeo = new THREE.BufferGeometry();
    const starCount = 350;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x8b9bb8,
      size: 0.06,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    let mouseX = 0;
    let mouseY = 0;
    const onPointerMove = (e: PointerEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      core.rotation.y = t * 0.28;
      core.rotation.x = Math.sin(t * 0.35) * 0.18;
      core.children[0].scale.setScalar(1 + Math.sin(t * 1.4) * 0.05);
      core.children[1].scale.setScalar(1 + Math.sin(t * 1.8) * 0.08);

      rings.forEach((r) => {
        r.rotation.z += r.userData.speed;
      });

      satellites.forEach((s) => {
        const { angle, radius, speed, yOff, rotSpeed } = s.userData;
        const a = angle + t * speed;
        s.position.set(
          Math.cos(a) * radius,
          Math.sin(a) * 0.5 + yOff,
          Math.sin(a) * radius * 0.35
        );
        s.rotation.x += rotSpeed.x * 0.008;
        s.rotation.y += rotSpeed.y * 0.008;
        s.rotation.z += rotSpeed.z * 0.008;
      });

      stars.rotation.y = t * 0.015;
      stars.rotation.x = Math.sin(t * 0.4) * 0.05;

      mainGroup.rotation.y += (mouseX * 0.4 - mainGroup.rotation.y) * 0.03;
      mainGroup.rotation.x += (-mouseY * 0.25 - mainGroup.rotation.x) * 0.03;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
          obj.geometry.dispose();
          const mat = obj.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}