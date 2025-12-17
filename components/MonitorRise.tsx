import Image from "next/image";
import { Button } from "./ui/button";
import { BookmarkCheck } from "lucide-react";
import BackThisProject from "./BackThisProject";

const MonitorRise = () => {
  return (
    <div
      aria-label="Mastercraft Bamboo Monitor Riser"
      className="w-[327px] md:w-[672px] lg:w-[730px] flex flex-col items-center justify-center bg-white rounded-lg md:h-[269px] min-h-[284px] relative px-6"
    >
      <Image
        src="/logo-mastercraft.svg"
        alt="Logo"
        width={56}
        height={56}
        priority={false}
        className="absolute -top-8 inset-x-0 mx-auto"
      />
      <div className="md:gap-8 gap-6 flex flex-col">
        {/* Title Section */}
        <div className="gap-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-black leading-[125%] tracking-normal font-bold text-xl md:text-[1.75rem] ">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-[#7A7A7A] text-sm tracking-normal leading-[175%] font-normal md:text-base md:leading-[200%]">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        {/* Button Section */}
        <div className="flex items-center justify-center md:justify-between gap-4">
          {/* Back this project TODO: Dynamic Button */}
          <BackThisProject />
          {/* Mobile Bookmark BTN */}
          <Button
            type="button"
            className="md:hidden group cursor-pointer bg-[#2F2F2F] hover:bg-[#147A73] transition-colors duration-700 ease-in rounded-full size-[56px]"
          >
            <BookmarkCheck className="fill-[#B1B1B1] transition-colors duration-700 ease-in text-[#b1b1b1] group-hover:fill-white group-hover:text-white" />
          </Button>
          {/* Desktop Bookmark BTN */}
          <Button
            type="button"
            className="hidden md:flex group items-center justify-center cursor-pointer bg-[#d9d9d9] hover:bg-[#F3F8F8] transition-colors duration-700 ease-in rounded-full w-[174px] h-[56px] text-[#7a7a7a] hover:text-[#147A73] relative pl-8 text-base leading-[125%] font-bold tracking-normal"
          >
            <span className="size-[56px] bg-[#2f2f2f] group-hover:bg-[#147A73] rounded-full flex items-center justify-center absolute left-0 transition-colors duration-700 ease-in">
              <BookmarkCheck className="fill-[#b1b1b1] text-[#b1b1b1] group-hover:fill-white group-hover:text-white transition-colors duration-700 ease-in" />
            </span>
            <span className="ml-4">Bookmark</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MonitorRise;
