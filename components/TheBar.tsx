"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

const TheBar = () => {
  const progress = 70;
  return (
    <div className="w-full max-w-md">
      <Progress value={progress} className="w-full h-2" />
      <div className="text-center mt-2 md:text-left text-[#7A7A7A] text-sm tracking-normal leading-[175%] font-normal md:leading-[200%] md:text-[0.9375rem]">
        {progress}% Complete
      </div>
    </div>
  );
};
export default TheBar;
