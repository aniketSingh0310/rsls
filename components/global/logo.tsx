import { cn } from "@/lib/utils";
import { Arsenal } from "next/font/google";
import Image from "next/image";

const font = Arsenal({
  subsets: ["latin"],
  weight: [ "400","700"],
});

const Logo = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Image src={"/rslsLogo.png"} width={60} height={60} alt="logo"/>
<p className={cn("text-[18px] font-semibold tracking-wide whitespace-nowrap leading-none",font.className)}>Reality Shipping <br/>And Logistics</p>
    </div>
  );
};

export default Logo;
