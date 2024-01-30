import Image from "next/image";

export default function QuickSignIn() {
  return (
    <>
      <span className="bg-white p-3 md:px-5 rounded-xl text-xs text-gray-500 font-normal hover:cursor-pointer">
        <Image
          src={"/google-logo.svg"}
          width={12}
          height={12}
          alt="google logo"
          className="inline mr-2"
        />
        Sign in with Google
      </span>
      <span className="bg-white p-3 md:px-5 rounded-xl text-xs text-gray-500 font-normal hover:cursor-pointer">
        <Image
          src={"/apple-logo.svg"}
          width={12}
          height={12}
          alt="apple logo"
          className="inline mr-2"
        />
        Sign in with Apple
      </span>
    </>
  );
}
