"use client";

import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import productImage from "@/assets/product-image.png";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

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

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dotLottie, setDotLottie] = useState<any>(null);

  const dotLottieRefCallback = (dotLottie: DotLottie) => {
    setDotLottie(dotLottie);
  };

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();

    const circumference = width * 2 + height * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width + height + width) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selected]);

  function handleHover() {
    dotLottie.setFrame(0);
    dotLottie.play();
  }

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleHover}
      className="border border-white/20 rounded-xl p-2.5 flex lg:flex-1 gap-2.5 items-center cursor-pointer relative"
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
        ></motion.div>
      )}

      <div className="border rounded-lg border-white/20 h-12 w-12 inline-flex items-center justify-center">
        <DotLottieReact
          src={props.icon}
          className="w-5 h-5"
          dotLottieRefCallback={dotLottieRefCallback}
          autoplay
        />
      </div>
      <div className="font-medium tracking-tighter">{props.title}</div>
      {props.isNew && (
        <div className="rounded-full bg-[#8C44FF] text-black font-semibold text-xs px-2 py-0.5 inline-flex justify-center items-center">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (tabIndex: number) => {
    setSelectedTab(tabIndex);

    const animatedOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[tabIndex].backgroundSizeX],
      animatedOptions
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), 100, tabs[tabIndex].backgroundPositionX],
      animatedOptions
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), 100, tabs[tabIndex].backgroundPositionY],
      animatedOptions
    );
  };

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
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              onClick={() => handleSelectTab(tabIndex)}
              selected={selectedTab === tabIndex}
              {...tab}
              key={tab.title}
            />
          ))}
        </div>
        <div className="mt-3 border rounded-xl border-white/20 p-2.5">
          <motion.div
            className="aspect-video bg-cover border rounded-lg border-white/20"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundPosition,
              backgroundSize,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
