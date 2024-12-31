// src/components/AboutSection/AboutSection.tsx
import React from "react";
import AboutNameplate from "./AboutNameplate";
import AboutText from "./AboutText";
import { IconCard } from "../footer/IconCard";
import { footerList } from "../../data/footerList";
import { ActiveButton } from "./ActiveButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section
      className={`bg-black text-white min-w-[320px] max-w-5xl mx-auto p-8 ${className}`}
    >
      <div className="flex flex-col items-start">
        <div className="mb-4">
          <AboutNameplate />
        </div>
        <div className="flex gap-6">
          {footerList.map((contact, index) => {
            return <IconCard key={index} contact={contact} />;
          })}
        </div>
      </div>

      <div className="my-6 border-b border-gray-700" />
      <div className="item-start">
        <h2 className="text-3xl font-bold mb-4">About</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 ml-4 mb-2 md:mb-0">
          <AboutText />
        </div>
        <div className="ml-3 md:w-1/2">
          <p className="leading-relaxed text-3xl font-semibold mb-4">
            I'm a front-end engineer specializing in creating web products for
            companies of various scales.
          </p>
          <div className="mt-4 mr-6">
            <ActiveButton
              href="mailto:ak.kozyrev01@gmail.com"
              icon={
                <ArrowRightIcon className="self-end text-white stroke-[2] h-10 w-10 ml-3 transition-transform duration-500 ease-in-out group-hover:translate-x-4" />
              }
              button={
                <div className="transition-transform transform text-white items-start font-normal sm:text-xl  md:text-2xl lg:text-4xl xl:text-4xl flex flex-col ml-3">
                  <div className="relative overflow-hidden w-full sm:h-6 md:h-7 lg:h-10 xl:h-10">
                    <p className=" duration-500 ease-in-out  sm:group-hover:-translate-y-6 md:group-hover:-translate-y-7 lg:group-hover:-translate-y-10 xl:group-hover:-translate-y-10 flex flex-col">
                      <span>Let's</span>
                      <span>Let's</span>
                    </p>
                  </div>
                  <div className="h-2"></div>
                  <div className="relative overflow-hidden w-full sm:h-6 md:h-7 lg:h-10 xl:h-10">
                    <p className="duration-500 delay-150 ease-in-out  sm:group-hover:-translate-y-6 md:group-hover:-translate-y-7 lg:group-hover:-translate-y-10 xl:group-hover:-translate-y-10 flex flex-col">
                      <span>Build</span>
                      <span>Build</span>
                    </p>
                  </div>
                  <div className="h-2"></div>
                  <div className="relative overflow-hidden w-full sm:h-6 md:h-7 lg:h-10 xl:h-10">
                    <p className="duration-500 delay-200 ease-in-out  sm:group-hover:-translate-y-6 md:group-hover:-translate-y-7 lg:group-hover:-translate-y-10 xl:group-hover:-translate-y-10 flex flex-col">
                      <span>Full Together</span>
                      <span>Full Together</span>
                    </p>
                  </div>
                  <div className="h-2"></div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
