import AnimatedText from "@/components/AnimatedText";
import AboutSection from "@/components/AboutSection";
import IsometricRoom from "@/components/IsometricRoom";
import useBodyScrollLock from "@/utils/useBodyScrollLock";
import ProjectSection from "@/components/ProjectsSection";

import React, { useEffect, useState } from "react";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [isLocked, toggle] = useBodyScrollLock();
  const [isIntroVisible, setIntroVisible] = useState(true);
  const [isImageVisible, setImageVisible] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    toggle();
    console.log(isLocked);
  }, []);

  useEffect(() => {
    if (!isIntroVisible) {
      const timer = setTimeout(() => {
        setShowIcons(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowIcons(false);
    }
  }, [isIntroVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-wrapper">
          <div className="intro-text">
            <AnimatedText
              once
              hidden={!isIntroVisible}
              text="Hey, I'm Jerry :)"
            />
          </div>
          {isIntroVisible && (
            <img
              src="giphy.gif"
              alt="click_me"
              id="click-me-image"
              className={isImageVisible ? "visible" : "hidden"}
              width="30"
              height="30"
            ></img>
          )}
          <div
            className="arrow-svg-wrapper"
            style={{
              opacity: isIntroVisible ? 0 : 1,
              transition: "opacity 0.5s ease 5s",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <div className="hero-main">
            <div className="hero-main-title">
              <AnimatedText once hidden={isIntroVisible} text="Jerry Zhang" />
            </div>
            <div className="hero-main-description">
              <AnimatedText
                once
                hidden={isIntroVisible}
                text="Student | Software Engineer"
              />
            </div>
            {!isIntroVisible && showIcons && (
              <div className="hero-main-icons">
                <a
                  href="https://github.com/jerryznr99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/github.svg"
                    alt="github"
                    width="30"
                    height="30"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/jerry-n-zhang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkedin.svg"
                    alt="linkedin"
                    width="30"
                    height="30"
                  ></img>
                </a>
                <a
                  href="mailto:jnzhang@usc.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/gmail.svg"
                    alt="gmail"
                    width="30"
                    height="30"
                  ></img>
                </a>
              </div>
            )}
          </div>
          <div
            className="experience"
            style={{ zIndex: isIntroVisible ? "auto" : -10 }}
          >
            <IsometricRoom setIntroVisible={setIntroVisible} />
          </div>
        </div>
      </section>
      <div id="first-section" className="section-margin"></div>
      {!isIntroVisible && <AboutSection />}
      <div id="second-section" className="section-margin"></div>
      {!isIntroVisible && <ExperienceSection background={"#FFFFFF"} />}
      <div id="third-section" className="section-margin"></div>
      {!isIntroVisible && <ProjectSection />}
      {!isIntroVisible && (
        <footer>
          <div id="footer-info">
            © 2024 Jerry Zhang. All rights reserved. Last updated: Sep 5, 2024.
          </div>
        </footer>
      )}
    </main>
  );
}
