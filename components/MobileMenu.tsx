import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navigation } from "./Header";
import { Separator } from "./ui/separator";
const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white size-8" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="md:max-w-[672px] md:h-[231px] max-w-[327px] bg-[#D9D9D9] rounded-lg p-8"
        >
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Links</SheetTitle>
            <SheetDescription>
              <div className="w-full">
                <ul className="flex flex-col gap-4">
                  {navigation.map((item, index) => (
                    <li key={item.id}>
                      <Link
                        href={"/"}
                        className="text-black text-lg font-medium tracking-normal leading-[125%] cursor-pointer hover:text-[#3CB3AB] transition-colors ease-in duration-700"
                      >
                        {item.label}
                      </Link>
                      {index !== navigation.length - 1 && (
                        <Separator className="w-full my-4" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;
