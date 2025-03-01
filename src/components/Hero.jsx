import Section from "./section";
import { curve } from "../assets";
import Button from "./Button";
import { kuis } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import CompanyLogos from "./CompanyLogos";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [text] = useTypewriter({
    words: ["Your AI assistant for all things music production! Introducing"],
    typeSpeed: 100,
  });
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            {text}
            <span style={{ color: "white" }}>
              <Cursor />
            </span>
            <span className="inline-block relative ">
              MuseBot{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Simplify Production, Maximize Creativity
          </p>
          <Button href="/pricing" white>
            {" "}
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-6 rounded-[1rem]">
              {" "}
              {/*Use for text chat later*/}
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"></div>
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} wdith={24} height={25} alt="icon" />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img className="w-full" width={1440} height={1800} alt="kuis" />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:locked" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
