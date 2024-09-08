import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8C45FF] transition-all duration-300 hover:shadow-[0px_0px_16px_#8C45FF] hover:brightness-110">
      <div className="absolute inset-0">
        <div className="border border-white/20 rounded-lg absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="border absolute inset-0 rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span className={twMerge("relative z-10", className)}>{children}</span>
    </button>
  );
};
