import React from "react";
import { ActiveButton } from "./ActiveButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

<div
  className={`group flex justify-between border-2 bg-neutral-900 hover:bg-neutral-800 bg-neutral-900 border-zinc-600 h-55 w-full p-4 transition-colors no-underline `}
>
  <div className="border-2 bg-neutral-900 p-4 border-zinc-600 h-55  mt-4 mr-6">
    <ActiveButton
      href="mailto:ak.kozyrev01@gmail.com"
      icon={
        <ArrowRightIcon className="self-end text-white stroke-[2] h-10 w-10 ml-3 transition-transform duration-500 ease-in-out group-hover:translate-x-4" />
      }
      button={
        //      className={`group flex justify-between border-2 bg-neutral-900 ${isHovered ? "hover:bg-neutral-800" : "bg-neutral-900"} border-zinc-600 h-55 w-full p-4 transition-colors no-underline `}

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
              <span>Together</span>
              <span>Together</span>
            </p>
          </div>
          <div className="h-2"></div>
        </div>
      }
    />
  </div>
</div>;

//text#1{Let's}
//text#2{Build}
//text#3{Together}
//text#4{} - spare
//href# {mailto:ak.kozyrev01@gmail.com}
//icon# {ArrowRightIcon }
