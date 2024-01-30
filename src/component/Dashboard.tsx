"use client";
import dashboardData from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
type DashboardProps = {
  close?: Dispatch<SetStateAction<boolean>>;
};

export default function Dashboard({ close }: DashboardProps) {
  return (
    <div className="absolute md:static inset-0 h-screen bg-white rounded-r-3xl md:rounded-none z-20">
      <div className="flex justify-between md:justify-center p-6">
        <Image src={"/logo-blue-text.svg"} width={70} height={70} alt="logo" className="md:w-32"/>
        {close && <button onClick={() => close(false)}>&#x2716;</button>}
      </div>
      <div className="flex flex-col gap-8 p-10 text-[#9A9AA9]">
        {dashboardData.map((link) => (
          <div
            key={link.title}
            className="flex gap-5 font-nunito font-semibold text-base hover:opacity-90"
          >
            <Image
              src={link.icon}
              height={25}
              width={25}
              alt="icon"
              className="fill-black "
            />
            <Link
              href={link.title}
              className={`${link.title === "Upload" ? "text-primary" : ""}`}
            >
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
