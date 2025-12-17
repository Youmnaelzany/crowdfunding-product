import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SelectPackages = () => {
  return (
    <div className="space-y-4">
      <RadioGroup defaultValue="option-one" className="space-y-4">
        {/* One */}
        <div className="rounded-xl border border-[#D9D9D9] p-4 md:p-6 lg:p-8 space-y-4 hover:border-[#3CB3AB] transition-colors">
          <div className="flex items-start space-x-4">
            <div className="flex items-center h-5 mt-0.5">
              <RadioGroupItem value="option-one" id="option-one" />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="option-one"
                className="text-black text-base font-medium cursor-pointer hover:text-[#3CB3AB] transition-colors"
              >
                Pledge with no reward
              </Label>
              <p className="text-[#7A7A7A] text-sm md:text-base leading-relaxed">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
          </div>
        </div>

        {/* Two */}
        <div className="rounded-xl border border-[#D9D9D9] p-4 md:p-6 lg:p-8 space-y-4 hover:border-[#3CB3AB] transition-colors">
          <div className="flex items-start space-x-4">
            <div className="flex items-center h-5 mt-0.5">
              <RadioGroupItem value="option-two" id="option-two" />
            </div>
            <div className="space-y-2 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <Label
                  htmlFor="option-two"
                  className="text-black text-base font-medium cursor-pointer hover:text-[#3CB3AB] transition-colors"
                >
                  <span>Bamboo Stand</span>
                  <span className="block md:inline-block text-[#3CB3AB] font-normal ml-0 md:ml-2">
                    Pledge $25 or more
                  </span>
                </Label>
                <span className="text-[#7A7A7A] text-sm">101 left</span>
              </div>
              <p className="text-[#7A7A7A] text-sm md:text-base leading-relaxed">
                You get an ergonomic stand made of natural bamboo. You&apos;ve
                helped us launch our promotional campaign, and you&apos;ll be
                added to a special Backer member list.
              </p>
            </div>
          </div>
        </div>

        {/* Three */}
        <div className="rounded-xl border border-[#D9D9D9] p-4 md:p-6 lg:p-8 space-y-4 hover:border-[#3CB3AB] transition-colors">
          <div className="flex items-start space-x-4">
            <div className="flex items-center h-5 mt-0.5">
              <RadioGroupItem value="option-three" id="option-three" />
            </div>
            <div className="space-y-2 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <Label
                  htmlFor="option-three"
                  className="text-black text-base font-medium cursor-pointer hover:text-[#3CB3AB] transition-colors"
                >
                  <span>Black Edition Stand</span>
                  <span className="block md:inline-block text-[#3CB3AB] font-normal ml-0 md:ml-2">
                    Pledge $75 or more
                  </span>
                </Label>
                <span className="text-[#7A7A7A] text-sm">64 left</span>
              </div>
              <p className="text-[#7A7A7A] text-sm md:text-base leading-relaxed">
                You get a Black Special Edition computer stand and a personal
                thank you. You&apos;ll be added to our Backer member list.
                Shipping is included.
              </p>
            </div>
          </div>
        </div>

        {/* Four */}
        <div className="rounded-xl border border-[#D9D9D9] p-4 md:p-6 lg:p-8 space-y-4 opacity-50 cursor-not-allowed">
          <div className="flex items-start space-x-4">
            <div className="flex items-center h-5 mt-0.5">
              <RadioGroupItem
                value="option-four"
                id="option-four"
                disabled
                className="opacity-50 cursor-not-allowed"
              />
            </div>
            <div className="space-y-2 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <Label
                  htmlFor="option-four"
                  className="text-black text-base font-medium"
                >
                  <span>Mahogany Special Edition</span>
                  <span className="block md:inline-block text-[#3CB3AB] font-normal ml-0 md:ml-2">
                    Pledge $200 or more
                  </span>
                </Label>
                <span className="text-[#7A7A7A] text-sm">0 left</span>
              </div>
              <p className="text-[#7A7A7A] text-sm md:text-base leading-relaxed">
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You&apos;ll be added to our Backer
                member list. Shipping is included.
              </p>
            </div>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SelectPackages;
