import React, { useState, useEffect } from "react";

type AboutSectionProps = {
  background?: string;
};

const AboutSection = ({ background }: AboutSectionProps) => {
  const [topRightRadius, setTopRightRadius] = useState(700);
  const [bottomRightRadius, setBottomRightRadius] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        let scrollProgressTop = 1 - sectionTop / windowHeight;
        scrollProgressTop = Math.min(Math.max(scrollProgressTop, 0), 1);
        const newTopRightRadius = 700 * (1 - scrollProgressTop);
        setTopRightRadius(newTopRightRadius);

        let scrollProgressBottom = sectionBottom / windowHeight;
        scrollProgressBottom = Math.min(Math.max(scrollProgressBottom, 0), 1);
        const newBottomRightRadius = 700 * (1 - scrollProgressBottom);
        setBottomRightRadius(newBottomRightRadius);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="about-section"
      className="flex flex-col w-1/2 h-[150vh] p-[20%_5%]"
      style={{
        background: background,
        borderTopRightRadius: `${topRightRadius}px`,
        borderBottomRightRadius: `${bottomRightRadius}px`,
        transition: "border-radius 0.0s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="text-lg font-bold leading-relaxed mt-12 text-[#333332]">
        Hey, I'm Jerry!
      </div>
      <div className="leading-loose mt-6 text-base text-[#333332]">
        <div>
          👋 An engineer, researcher, product manager interested in AI/ML.
          Originally from Vancouver, Canada 🇨🇦, I am now based in Los Angeles
          🌇. Currently, I am co-founding{" "}
          <a
            href="https://www.clinicode.app/"
            className="underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            Clinicode
          </a>
          , an AI-powered medical coding startup receiving 16K from{" "}
          <a
            href="https://research.usc.edu/"
            className="underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            OORI
          </a>{" "}
          at USC and am the youngest founder in{" "}
          <a
            href="https://www.techstars.com/accelerators/usc-and-techstars-digital-economy-program"
            className="underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            Techstars
          </a>{" "}
          accelerator.
        </div>
        <br></br>
        <div>
          I’m a full-tuition scholarship student at the University of Southern
          California studying{" "}
          <a
            href="https://www.cs.usc.edu/academic-programs/undergrad/computer-science-business-administration/"
            className="underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            Computer Science and Business Administration
          </a>{" "}
          🖥️, a combined degree offered by the USC Viterbi School of Engineering
          and the Marshall School of Business 🎓.
        </div>
        <br></br>
        <div>
          I help lead{" "}
          <a
            href="https://uscsep.com/"
            className="underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            USC’s flagship startup incubator
          </a>{" "}
          🚀, currently incubating 10 companies. I am an AI Researcher at the{" "}
          <a
            href="https://descyphy.usc.edu/"
            className="underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            Cyber-Physical System Design Lab
          </a>{" "}
          working on self-driving vechicles 🏎️. I am a developer at Code the
          Change, building full-stack applications for{" "}
          <a
            href="https://www.raiseachild.org/"
            className="underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            Raise a Child
          </a>{" "}
          nonprofit with 600K+ user 🌎.
        </div>
        <br></br>
        <div>
          See more on my{" "}
          <a
            href="Jerry_Zhang_Software_Engineer_Resume.pdf"
            className="underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            resume
          </a>{" "}
          or contact me at{" "}
          <a
            href="mailto:jnzhang@usc.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-4"
          >
            jnzhang@usc.edu
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
