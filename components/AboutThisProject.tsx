import AboutThisProjectDescription from "./AboutThisProjectDescription";
import Packages from "./Packages";

const AboutThisProject = () => {
  return (
    <div className="w-[327px] md:w-[672px] lg:w-[730px] h-[1655px] bg-white rounded-lg p-6 md:p-8 gap-6 md:gap-8 md:h-[1272px] lg:h-[1197px]">
      {/* About This Project Description */}
      <AboutThisProjectDescription />
      <Packages />
    </div>
  );
};
export default AboutThisProject;
