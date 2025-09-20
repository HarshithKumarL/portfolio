import { HeroSectionProps } from "@/types/types";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const HeroSection: React.FC<HeroSectionProps> = ({
  header,
  description,
  button,
  buttonUrl,
  scrollToSection,
  sectionList,
}) => {
  const hanldeClick = (key: string) => {
    scrollToSection?.(key);
  };
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, #161A31 0%, #070A1B 100%),
            linear-gradient(90deg, #C34124 0%, #F99A85 50%, #C34124 100%)
          `,
          backgroundBlendMode: "normal",
        }}
      ></div>

      <div
        className="absolute rounded-full opacity-20"
        style={{
          width: "740px",
          height: "750px",
          background:
            "radial-gradient(circle, rgba(255,200,150,0.2) 0%, transparent 70%)",
          top: "-380px",
          left: "165px",
          transform: "rotate(180deg)",
        }}
      ></div>

      {["top-right", "bottom-left", "bottom-right"].map((pos, i) => {
        const style: React.CSSProperties =
          pos === "top-right"
            ? { top: 0, right: 0 }
            : pos === "bottom-left"
            ? { bottom: 0, left: 0 }
            : { bottom: 0, right: 0 };
        return (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: "200px",
              height: "200px",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
              ...style,
            }}
          ></div>
        );
      })}

      <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 pointer-events-none">
        {Array.from({ length: 6 }).map((_, rowIdx) =>
          Array.from({ length: 10 }).map((_, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              className="border border-white/2"
              style={{ borderWidth: "0.5px" }}
            ></div>
          ))
        )}
      </div>

      <div
        className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 p-[1px] rounded-[13px] z-50"
        style={{
          background:
            "linear-gradient(to right, rgba(105,113,200,0.2) 0%, rgba(39,42,60,0.15) 100%)",
          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 12px rgba(105,113,200,0.2)",
        }}
      >
        <div
          className="flex justify-between items-center px-[19px]"
          style={{
            width: "calc(100vw - 2rem)",
            maxWidth: "451px",
            height: "66px",
            background: "linear-gradient(to right, #04071D 0%, #0C0E23 100%)",
            borderRadius: "13px",
            opacity: 1,
          }}
        >
          {sectionList?.map((section) => {
            const key = section?.fields?.componentType || "";
            const keyindex = section?.fields.slug || ""; // Use slug as key
            if (key === "HeroSection") return null;
            return (
              <button
                key={keyindex}
                onClick={hanldeClick.bind(null, key)}
                className="text-white text-sm sm:text-base cursor-pointer font-medium hover:text-[#CBACF9] transition"
              >
                {key.replace("Section", "")}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 lg:pt-24">
        <h1 className="text-[48px] sm:text-[72px] font-bold text-white leading-[1.2] max-w-[90%] sm:max-w-[938px] text-center tracking-[-2px] sm:tracking-[-3.6px]">
          {(() => {
            const words = header.trim().split(" ");
            const lastWord = words.pop();
            return (
              <>
                {words.join(" ")}{" "}
                <span className="text-[#CBACF9]">{lastWord}</span>
              </>
            );
          })()}
        </h1>

        {description && (
          <p className="text-gray-300 text-base sm:text-lg max-w-[90%] sm:max-w-xl mt-4">
            {description}
          </p>
        )}

        {button && buttonUrl && (
          <button
            onClick={hanldeClick.bind(null, buttonUrl)}
            className="mt-6 sm:mt-8 flex items-center cursor-pointer justify-center font-semibold text-white relative whitespace-nowrap w-full sm:w-[180px] p-[1px] rounded-[14px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(105,113,162,0.3) 0%, rgba(39,42,60,0.2) 100%)", // light gradient border
            }}
          >
            <div
              className="flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap w-full h-[56px] rounded-[14px]"
              style={{
                background:
                  "linear-gradient(to bottom, #161A31 0%, #06091F 100%)",
                opacity: 1,
              }}
            >
              {button}
              <FiArrowUpRight className="text-white" size={18} />
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
