"use client";

import { ApproachSectionProps } from "@/types/types";
import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

const MyApproachSection: React.FC<ApproachSectionProps> = ({
  myApproachCards,
  sectionName,
}) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  if (!myApproachCards || myApproachCards.length === 0) return null;

  const toggleFlip = (idx: number) => {
    setFlippedCards((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#070A1B]">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        {sectionName.split(" ").map((word, idx, arr) => {
          if (idx === arr.length - 1) {
            return (
              <span key={idx} className="text-[#CBACF9]">
                {word}
              </span>
            );
          }
          return word + " ";
        })}
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2 sm:px-6 lg:px-16 justify-items-center">
        {myApproachCards.map((card, idx) => {
          const { header, subtitle, description } = card.fields;
          const isFlipped = flippedCards.includes(idx);

          return (
            <div
              key={idx}
              className="group w-full max-w-[387px] aspect-[387/620] [perspective:1000px] cursor-pointer"
              onClick={() => toggleFlip(idx)} // flip on click for mobile
            >
              {/* Flip Container */}
              <div
                className={`
                  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]
                  ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
                  group-hover:[transform:rotateY(180deg)]
                `}
              >
                {/* Front Side */}
                <div className="absolute inset-0 rounded-xl border border-white/5 shadow-lg flex flex-col items-center justify-center bg-gradient-to-b from-[#04071D] to-[#0C0E23] [backface-visibility:hidden]">
                  <HiOutlinePlus
                    className="absolute -top-2 -left-2 text-white/40 group-hover:text-[#CBACF9] transition-colors duration-300"
                    size={20}
                  />
                  <HiOutlinePlus
                    className="absolute -top-2 -right-2 text-white/40 group-hover:text-[#CBACF9] transition-colors duration-300"
                    size={20}
                  />
                  <HiOutlinePlus
                    className="absolute -bottom-2 -left-2 text-white/40 group-hover:text-[#CBACF9] transition-colors duration-300"
                    size={20}
                  />
                  <HiOutlinePlus
                    className="absolute -bottom-2 -right-2 text-white/40 group-hover:text-[#CBACF9] transition-colors duration-300"
                    size={20}
                  />
                  {header.includes("–") ? (
                    <>
                      <h3 className="text-[#CBACF9] font-bold text-2xl">
                        {header.split("–")[0].trim()}
                      </h3>
                      <h3 className="text-white font-bold text-xl mt-1">
                        {header.split("–")[1].trim()}
                      </h3>
                    </>
                  ) : (
                    <h3 className="text-white font-bold text-2xl">{header}</h3>
                  )}
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rounded-xl border border-white/5 shadow-lg flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#04071D] to-[#0C0E23] p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h4 className="text-[#CBACF9] font-medium text-lg mb-4">
                    {subtitle}
                  </h4>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyApproachSection;
