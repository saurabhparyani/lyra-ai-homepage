import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";

const logos = [
  {
    src: acmeLogo,
    alt: "Acme",
  },
  {
    src: pulseLogo,
    alt: "Pulse",
  },
  {
    src: echoLogo,
    alt: "Echo",
  },
  {
    src: celestialLogo,
    alt: "Celestial",
  },
  {
    src: apexLogo,
    alt: "Apex",
  },
  {
    src: quantumLogo,
    alt: "Quantum",
  },
];

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            {/* LOGO CONTAINER */}
            <div className="flex flex-none gap-14">
              {/* LOGOS */}
              {logos.map((logo) => (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  key={logo.alt}
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
