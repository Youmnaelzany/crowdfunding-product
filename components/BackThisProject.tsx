"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import SelectPackages from "./SelectPackages";
import { useEffect, useRef } from "react";

const BackThisProject = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent focus trap issues
    const handleFocus = (e: FocusEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node)
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="w-[214px] h-[56px] rounded-full bg-[#3CB3AB] text-white text-base font-bold
          hover:bg-[#147A73] transition-colors duration-300"
        >
          Back this project
        </Button>
      </DialogTrigger>

      <DialogContent
        className="max-w-[327px] md:max-w-[672px] lg:max-w-[730px] max-h-[90vh] flex flex-col p-0"
        ref={contentRef}
      >
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-black text-xl md:text-2xl text-left">
            Back this project
          </DialogTitle>
          <DialogDescription className="text-left text-[#7A7A7A] mt-2">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto px-6 pb-6 flex-1">
          <SelectPackages />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BackThisProject;
