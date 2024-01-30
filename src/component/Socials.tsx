import Image from "next/image";

type SocialProps = {
  imageBg: string;
};

export default function Social({ imageBg }: SocialProps) {
  return (
    <div className="flex items-center justify-between">
      <Image
        src={`./github-${imageBg}.svg`}
        width={30}
        height={30}
        alt="Github link"
        className="cursor-pointer"
      />
      <Image
        src={`./twitter-${imageBg}.svg`}
        width={30}
        height={30}
        alt="Github link"
        className="cursor-pointer"
      />
      <Image
        src={`./linkedin-${imageBg}.svg`}
        width={30}
        height={30}
        alt="Github link"
        className="cursor-pointer"
      />
      <Image
        src={`./discord-${imageBg}.svg`}
        width={30}
        height={30}
        alt="Github link"
        className="cursor-pointer"
      />
    </div>
  );
}
