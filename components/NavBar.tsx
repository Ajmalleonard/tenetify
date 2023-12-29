import Link from "next/link";
import logo from "../public/assets/hilink-logo.svg";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { link } from "fs";
import userIcon from "/public/assets/user.svg";
import Button from "./Button";
import menuIcon from "../public/assets/menu.svg";

function NavBar() {
  return (
    <nav className="max-container padding-container flexBetween relative z-30 py-5 px-5 ">
      <Link href="/">
        <Image className="mx-4" src={logo} alt="logo" width={80} height={80} />
      </Link>
      <ul className="hidden gap-6 lg:flex h-full ">
        {NAV_LINKS.map((link) => (
          <Link
            className="font-regular hover:font-bold hover:text-green-600 transition-all text-black px-3 flex items-center justify-center cursor-pointer"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type={"button"}
          icon={userIcon}
          label={"Log in"}
          title={"login"}
          variant={"btn_dark_green"}
        />
      </div>
      <Image
        className="lg:hidden inline-block mr-3 cursor-pointer"
        src={menuIcon}
        alt="menu"
      />
    </nav>
  );
}

export default NavBar;
