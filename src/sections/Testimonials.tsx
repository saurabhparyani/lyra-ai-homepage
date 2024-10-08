"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">
          Beyond Expectations.
        </h2>
        <p className="mt-5 tracking-tight text-lg md:text-xl text-white/70 text-center max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transformed our clients&apos;
          strategies.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 pr-5 flex-none -translate-x-1/2"
          >
            {testimonials.concat(testimonials).map((testimonial) => (
              <div
                key={testimonial.name}
                className="border rounded-xl p-6 md:p-10 border-white/15 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none"
              >
                <p className="text-lg text-left tracking-tight md:text-2xl">
                  {testimonial.text}
                </p>
                <div className="mt-5 flex gap-3 items-center">
                  <div className="relative after:absolute after:inset-0 after:bg-[#8C44FF] after:mix-blend-soft-light after:rounded-lg before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={testimonial.name}
                      className="w-11 h-11 rounded-lg grayscale"
                    />
                  </div>
                  <div className="text-left">
                    <h2 className="tracking-tight">{testimonial.name}</h2>
                    <p className="tracking-tight text-white/50 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
