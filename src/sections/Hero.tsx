import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* PLANET */}
      <div
        className="absolute w-64 h-64 md:w-[384px] md:h-[384px] bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"
        style={{
          background:
            "radial-gradient(50% 50% at 16.8% 18.3%, white, rgb(184, 148, 255) 37.7%, rgb(24, 0, 66))",
        }}
      ></div>

      {/* RINGS */}
      {/* RING 1 */}
      <div className="absolute w-[344px] h-[344px] md:w-[580px] md:h-[580px] border rounded-full opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* CIRCLES ON RINGS */}
        {/* left */}
        <div className="absolute w-2 h-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
        {/* up */}
        <div className="absolute w-2 h-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>

        {/* right */}
        <div className="absolute w-5 h-5 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 border border-white rounded-full inline-flex justify-center items-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* RING 2 */}
      <div className="absolute w-[444px] h-[444px] md:w-[780px] md:h-[780px] border border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-white/20"></div>
      {/* RING 3 */}
      <div className="absolute w-[544px] h-[544px] md:w-[980px] md:h-[980px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* CIRCLES ON RINGS */}
        {/* left */}
        <div className="absolute w-2 h-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
        <div className="absolute w-2 h-2 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="container relative">
        <div className="pt-[64px] flex flex-col justify-center items-center">
          <h1 className="text-8xl md:text-[168px] font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] inline-block text-transparent bg-clip-text pb-[10px]">
            LyraAI
          </h1>
          <p className="mb-[20px] text-white/70 text-[18px] md:text-[20px] text-center tracking-[-2.5%] max-w-xl mx-auto">
            Elevate your site&apos;s visibility effortlessly with AI, where
            smart technology meets user-friendly SEO tools.
          </p>
          <div className="flex justify-center md:pt-[30px]">
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
