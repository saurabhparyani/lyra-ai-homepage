"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import productImage from "@/assets/product-image.png";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">
          Elevate your SEO efforts.
        </h1>
        <p className="text-white/70 tracking-tight text-lg md:text-xl max-w-2xl mx-auto text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/20 rounded-xl p-2.5 flex lg:flex-1 gap-2.5 items-center"
            >
              <div className="border rounded-lg border-white/20 h-12 w-12 inline-flex items-center justify-center">
                <DotLottieReact src={tab.icon} className="w-5 h-5" autoplay />
              </div>
              <div className="font-medium tracking-tighter">{tab.title}</div>
              {tab.isNew && (
                <div className="rounded-full bg-[#8C44FF] text-black font-semibold text-xs px-2 py-0.5 inline-flex justify-center items-center">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 border rounded-xl border-white/20 p-2.5">
          <div
            className="aspect-video bg-cover border rounded-lg border-white/20"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
