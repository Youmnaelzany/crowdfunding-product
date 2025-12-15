import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const navigation = [
  {
    id: 1,
    label: "About",
  },
  {
    id: 2,
    label: "Discover",
  },
  {
    id: 3,
    label: "Get Started",
  },
];

const Header = () => {
  return (
    <Wrapper
      as="header"
      aria-label="Header"
      className="flex items-center justify-between py-12"
    >
      <Link href={"/"}>
        <Image src="/logo.svg" alt="Logo" width={128} height={20} />
      </Link>
      {/* Navigation Links For Desktop */}
      <nav className="hidden lg:flex">
        <ul className="flex items-center justify-between gap-8">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={"/"}
                className="text-white text-lg font-medium tracking-normal leading-[125%] cursor-pointer hover:text-[#3CB3AB] transition-colors ease-in duration-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Navigation Links For Mobile */}
      <MobileMenu />
    </Wrapper>
  );
};
export default Header;
