import { Button } from "./ui/button";

const packagesData = [
  {
    id: 1,
    title: "Bamboo Stand",
    label: "Pledge $25 or more",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    daysLeft: "101",
    submit: "Select Reward",
  },
  {
    id: 2,
    title: "Black Edition Stand",
    label: "Pledge $75 or more",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You&apos;ll be added to our Backer member list. Shipping is included.",
    daysLeft: "64",
    submit: "Select Reward",
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    label: "Pledge $200 or more",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You&apos;ll be added to our Backer member list. Shipping is included.",
    daysLeft: "0",
    submit: "Out of Stock",
  },
];

const Packages = () => {
  return (
    <div className="py-6 flex flex-col gap-6 md:py-8">
      {packagesData.map((items) => (
        <div
          className="max-w-[634px] max-h-[370px] p-6 md:p-8 flex flex-col rounded-xl border border-[#D9D9D9] md:max-h-[248px]"
          key={items.id}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h3 className="text-black font-bold leading-[125%] text-sm tracking-normal md:text-lg">
              {items.title}
            </h3>
            <h4 className="text-[#3CB3AB] font-medium leading-[125%] text-sm tracking-normal md:text-[0.9375rem]">
              {items.label}
            </h4>
          </div>
          <p className="pt-4 pb-6 md:pb-4 md:pt-6 text-[#7A7A7A] font-normal leading-[175%] text-sm tracking-normal md:text-base md:leading-[200%]">
            {items.description}
          </p>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <h5 className="text-[#7A7A7A] font-normal text-[0.9375rem] tracking-normal leading-[200%] flex items-center gap-2">
              <span className="text-black font-bold text-[2rem] leading-[125%]">
                {items.daysLeft}
              </span>
              left
            </h5>
            <Button
              type="submit"
              className="w-[157px] h-[48px] rounded-full bg-[#3CB3AB] text-white hover:bg-[#147A73] ease-in duration-700 transition-colors font-bold text-sm tracking-normal leading-[125%]"
            >
              {items.submit}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Packages;
