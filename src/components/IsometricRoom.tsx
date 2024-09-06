"use client";

import { useState, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";

import useMousePosition from "@/utils/useMousePosition.js";
import useBodyScrollLock from "@/utils/useBodyScrollLock";

interface IsometricRoomProps {
  setIntroVisible: (visible: boolean) => void;
}

export default function IsometricRoom({ setIntroVisible }: IsometricRoomProps) {
  const room = useRef<any>(null);
  const cube = useRef<any>(null);

  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [isLocked, toggle] = useBodyScrollLock();

  const mousePosition = useMousePosition();

  function onLoad(spline: { findObjectById: (arg0: string) => any }) {
    const obj = spline.findObjectById("847d8ef0-6eb8-4e6a-b2f0-1cc336bbb232");
    room.current = obj;
    const obj1 = spline.findObjectById("36b6f4af-23c7-46ff-8d2f-d2b73c989a56");
    cube.current = obj1;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onSplineMouseDown(e: any) {
    if (e.target.name === "Cube") {
      console.log("cube has been clicked");

      setIntroVisible(false);
      setTimeout(() => {
        toggle();
      }, 6000);
    }
  }

  useEffect(() => {
    if (!isLocked) {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        if (room.current) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#first-section",
                start: "top bottom",
                end: "bottom center",
                scrub: true,
              },
            })
            .to(room.current.position, { x: 3300, y: 1000 }, 0)
            .to(room.current.scale, { x: 1.5, y: 1.5, z: 1.5 }, 0);

          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#second-section",
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            })
            .to(room.current.position, { x: -3300, y: -1000 }, 0)
            .to(room.current.scale, { x: 3, y: 3, z: 3 }, 0);
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#third-section",
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            })
            .to(room.current.position, { x: 0, y: 0 }, 0)
            .to(room.current.scale, { x: 1, y: 1, z: 1 }, 0);
        }
      });
    }
  }, [isLocked, room.current]);

  useEffect(() => {
    const center = window.innerWidth / 2;
    const angle = ((center - mousePosition.x) / center) * 45;

    if (room.current) {
      gsap.to(room.current.rotation, {
        y: (angle / 100) * -1,
        ease: "none",
        duration: 0.1,
      });
    }

    if (cube.current) {
      gsap.to(cube.current.rotation, {
        y: (angle / 100) * -1,
        ease: "none",
        duration: 0.1,
      });
    }
  }, [mousePosition]);

  return (
    <>
      <Spline
        scene="https://prod.spline.design/87850mYoHAr94uln/scene.splinecode"
        onLoad={onLoad}
        onSplineMouseDown={onSplineMouseDown}
      />
    </>
  );
}
