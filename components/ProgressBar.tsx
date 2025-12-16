import TheBar from "./TheBar";
import { Separator } from "./ui/separator";

const ProgressBar = () => {
  return (
    <div
      aria-label="App Data"
      className="w-[327px] md:w-[672px] lg:w-[730px] flex flex-col items-center bg-white rounded-lg md:h-[210px] h-[412px] p-12 lg:h-[212px] gap-4 md:items-start"
    >
      {/* Title */}
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-start gap-6">
        <div className="flex flex-col items-center justify-center md:items-start">
          <h3 className="text-black text-[2rem] leading-[125%] tracking-normal font-bold">
            $89,914
          </h3>
          <h4 className="text-[#7A7A7A] text-sm tracking-normal leading-[175%] font-normal md:leading-[200%] md:text-[0.9375rem]">
            of $100,000 backed
          </h4>
        </div>
        <Separator className="md:hidden" />
        <Separator className="hidden md:block" orientation="vertical" />
        <div className="flex flex-col items-center justify-center md:items-start">
          <h3 className="text-black text-[2rem] leading-[125%] tracking-normal font-bold">
            5,007
          </h3>
          <h4 className="text-[#7A7A7A] text-sm tracking-normal leading-[175%] font-normal md:leading-[200%] md:text-[0.9375rem]">
            total backers
          </h4>
        </div>
        <Separator className="md:hidden" />
        <Separator className="hidden md:block" orientation="vertical" />
        <div className="flex flex-col items-center justify-center md:items-start">
          <h3 className="text-black text-[2rem] leading-[125%] tracking-normal font-bold">
            56
          </h3>
          <h4 className="text-[#7A7A7A] text-sm tracking-normal leading-[175%] font-normal md:leading-[200%] md:text-[0.9375rem]">
            days left
          </h4>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full">
        <TheBar />
      </div>
    </div>
  );
};
export default ProgressBar;
