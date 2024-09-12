import LogoIcon from "@/assets/logo.svg";
import XLogo from "@/assets/social-x.svg";
import InstagramLogo from "@/assets/social-instagram.svg";
import YouTubeLogo from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <LogoIcon className="h-6 w-6" />
            <div className="font-medium text-sm">LyraAI</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-xs text-white/70 transition md:text-sm hover:text-white"
            >
              Features
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition md:text-sm hover:text-white"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition md:text-sm hover:text-white"
            >
              Company
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition md:text-sm hover:text-white"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition md:text-sm hover:text-white"
            >
              ChangeLog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-row lg:flex-1 lg:justify-end">
            <XLogo className="h-6 w-6 text-white/40 hover:text-white transition" />
            <InstagramLogo className="h-6 w-6 text-white/40 hover:text-white transition" />
            <YouTubeLogo className="h-6 w-6 text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
