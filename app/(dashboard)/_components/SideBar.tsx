"use client";
import LOGO from "@/assets/logo.svg";
import Image from "next/image";
import { DynamicLinksList } from "@/app/_components/Links";

const SideBar = () => {
  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <Image src={LOGO} alt="logo" className="mx-auto" />
      <div className="flex flex-col mt-20 gap-y-4">
        <DynamicLinksList />
      </div>
    </aside>
  );
};
export default SideBar;
