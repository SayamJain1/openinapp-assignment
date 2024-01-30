import Image from "next/image";
import Social from "./Socials";
import QuickSignIn from "./UI/quickSignIn";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="w-96 space-y-10 p-2 md:p-0">
      <div>
        <h2 className="text-2xl font-bold">Sign In</h2>
        <p className="font-lato text-sm font-normal">Sign in to your account</p>
      </div>
      <div className="space-y-10">
        <div className="font-lato flex justify-between">
          <QuickSignIn />
        </div>

        <div className="font-lato p-5 bg-white">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-base mb-1">
                Email address
              </label>
              <input
                required
                type="email"
                id="email"
                className="bg-[#F5F5F5] p-1.5 rounded-lg focus:bg-[#EAEAEA] outline-none pl-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-base  mb-1">
                Password
              </label>
              <input
                required
                type="password"
                id="password"
                className="bg-[#F5F5F5] p-1.5 rounded-lg focus:bg-[#EAEAEA] outline-none pl-3"
              />
            </div>
            <p className="text-primary">Forgot password?</p>
            <Link href={'/dashboard'}>
                <button className="font-sans font-bold hover:opacity-90 text-base text-white p-2 rounded-lg bg-primary w-full">
                  Sign In
                </button>
            </Link>
          </form>
        </div>
        <p className="font-lato text-base text-gray-500 text-center">
          Don’t have an account?{" "}
          <span className="text-primary block md:inline">Register here</span>
        </p>
        <div className="block md:hidden w-52 mx-auto">
          <Social imageBg="dark" />
        </div>
      </div>
    </div>
  );
}
