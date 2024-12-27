import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface ActiveButtonProps {
  onClick?: () => void;
}

const ActiveButton: React.FC<ActiveButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" 
              flex flex-row  justify-between border-2 bg-gray-800 hover:bg-gray-700 border-white 
              h-55 w-80 p-4 transition-colors"
    >
      <div
        className="text-white items-start font-semibold text-3xl 
              flex flex-col"
      >
        <p className="mb-1">Let's</p>
        <p className="mb-1">Build</p>
        <p className="mb-1">Together </p>
      </div>
      <ArrowRightIcon className="self-end h-10 w-10 ml-2" />
    </button>
  );
};

export default ActiveButton;
