import SignIn from "@/component/SignIn";
import Social from "@/component/Socials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <div className="bg-primary p-3 md:p-10 h-20 md:clip-bg md:h-full w-full text-white flex items-center md:items-stretch flex-row md:flex-col md:justify-between">
        <div>
          <Image
            src={"./logo-white.svg"}
            className="w-auto h-7 md:h-20"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="ml-5 md:ml-0 my-auto text-center text-xl md:text-7xl font-semibold md:font-bold md:uppercase">
          Base
        </div>
        <div className="hidden md:block w-64">
          <Social imageBg={"light"} />
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}
