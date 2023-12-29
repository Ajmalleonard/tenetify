import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type footerCrops = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: footerCrops) => {
  return (
    <div>
      <h4 className="font-bold">{title}</h4>
      {children}
    </div>
  );
};

function Footer() {
  return (
    <footer className=" items-center justify-center flex flex-col mb-[100px] max-container">
      <div className="padding-container flex w-full flex-col gap-14">
        <div className="flex-flex-col md:flex-row items-start gap-[10%] justify-center">
          <Link href="/">
            <Image
              src="hilink-logo.svg"
              width={78}
              height={28}
              alt="logo"
              className="mt-[5px] mb-5"
            />
            <div className="w-full py-2 bg-green-50 opacity-5 rounded-full mb-5"></div>
          </Link>
          <div className="flex items-start bg-slate-50 rounded-5xl py-[200px] md:justify-around  flex-wrap gap-10 md:flex-1">
            {FOOTER_LINKS.map((link) => (
              <FooterColumn title={link.title} key={link.title}>
                <ul className="flex flex-col">
                  {link.links.map((gate) => (
                    <Link href={gate.href}>{gate.link}</Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>
      </div>
      <div className="flex my-5">
        <div className="flex p-2 items-center justify-center">
          <h2 className="font-bold mr-5">{SOCIALS.title}</h2>
          <div className="flex rounded-full px-[10px] py-3 bg-slate-50">
            {SOCIALS.links.map((link) => (
              <Link href={link.href}>
                <div className="p-0 justify-center items-center flex bg-green-50  hover:bg-black mx-2 rounded-full h-[50px] w-[50px]">
                  <Image
                    src={link.link}
                    width={24}
                    height={24}
                    alt={link.alt}
                    className="hover:cursor-pointer dark:invert"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <h4>© 2022 Marmara Travel Services All Rights Reserved</h4>
    </footer>
  );
}

export default Footer;
