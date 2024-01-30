"use client";

import Image from "next/image";
import { useState } from "react";
import Dashboard from "./Dashboard";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      {open ? (
        <Dashboard close={setOpen} />
      ) : (
        <div className="flex items-center p-6 justify-between">
          <div className="flex items-center justify-start gap-5">
            <Image
              src={"/hamburger.svg"}
              width={18}
              height={18}
              alt="hamburger menu"
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />

            <Image
              src={"/logo-blue-text.svg"}
              width={70}
              height={70}
              alt="logo"
            />
          </div>
          <div className="">
            <Image
              src={"/bell-avatar.svg"}
              width={70}
              height={70}
              alt="bell and avatar"
            />
          </div>
        </div>
      )}
    </div>
  );
}
