import React from "react";

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={className}>
      <h1 className="text-lg font-bold group-hover:text-yellow-500 transition-all">
        {text}
      </h1>
      <div className="w-30 h-2 bg-yellow-400 rounded-full translate-y-1"></div>
      <div className="w-30 h-2 bg-red-500 rounded-full translate-x-3"></div>
    </div>
  );
};

export default Title;
