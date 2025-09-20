"use client";

import { AboutSectionProps } from "@/types/types";
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

const AboutSection: React.FC<AboutSectionProps> = ({ boxes }) => {
  const [copied, setCopied] = useState(false);
  const email = "harshith0506@gmail.com";

  if (!boxes || boxes.length < 6) return null;

  const borderStyle = {
    background:
      "linear-gradient(90deg, rgba(105,113,162,0.3) 0%, rgba(39,42,60,0.2) 100%)",
    padding: "1px",
    borderRadius: "12px",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      className="relative w-full py-16 px-4 sm:px-6"
      style={{ backgroundColor: "#070A1B" }}
      id="about"
    >
      <div className="relative max-w-[1440px] mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div style={borderStyle}>
            <div className="rounded-xl w-full h-[541px] relative overflow-hidden flex flex-col lg:flex-row">
              <div className="hidden lg:block lg:w-1/2 h-full bg-[#070A1B] relative"></div>

              <div
                className="w-full h-full bg-cover bg-center lg:w-1/2 lg:h-full"
                style={{
                  backgroundImage: `url(${boxes[0]?.fields?.backgroundImage?.fields?.file?.url})`,
                }}
              ></div>

              <div className="absolute top-[20%] left-10 flex flex-col items-start gap-0">
                <div
                  className="relative bg-[#D1ACFF] text-[#070A1B] text-sm font-medium px-12 py-3 lg:px-18 lg:py-3"
                  style={{
                    borderTopLeftRadius: "12px",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                  }}
                >
                  <div
                    className="absolute -top-8 -right-8"
                    style={{ transform: "rotate(20deg)" }}
                  >
                    <svg
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M0.999695 16.9995L25.0007 27.0005L30.9997 1.00049L0.999695 16.9995Z"
                          fill="#D1ACFF"
                        />
                        <path
                          d="M12.9997 31L18.0997 24.13L12.9997 22V31Z"
                          fill="#D1ACFF"
                        />
                        <path
                          d="M22.0002 12L13.0002 22V31L16.0002 27M31.0002 1L1.00018 17L25.0002 27L31.0002 1Z"
                          stroke="#000000"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_901_3003">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute top-[55%] left-[85%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0">
                <div
                  className="relative bg-[#F6F056] text-[#070A1B] text-sm font-medium px-12 py-3 lg:px-18 lg:py-3"
                  style={{
                    borderTopRightRadius: "12px",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                  }}
                >
                  <div className="absolute -top-8 -left-10 translate-x-1/2">
                    <svg
                      fill="#F6F056"
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>paperplane</title>
                      <path d="M3.363 4.414l4.875 19.348 9.467-3.018-8.448-10.298 10.902 9.56 8.853-2.77-25.649-12.822zM18.004 27.586v-5.324l-3.116 0.926 3.116 4.398z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text overlay */}
              <div
                className={`absolute bottom-4 left-4 w-full px-4 lg:top-[70%] lg:left-4 lg:w-[90%]`}
              >
                <h3 className="text-white font-bold text-[20px] lg:text-[32px] leading-snug lg:leading-snug max-w-full lg:max-w-[80%]">
                  {boxes[0]?.fields.title}
                </h3>
                {boxes[0]?.fields.subtitle && (
                  <p className="text-gray-300 text-sm lg:mt-2">
                    {boxes[0]?.fields.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
          {/* First box stays normal */}
          <div style={borderStyle}>
            <div
              className="rounded-xl h-[260px] bg-[#10132E] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${boxes[1]?.fields?.backgroundImage.fields.file.url})`,
              }}
            >
              <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-start pt-12 text-left">
                <h3 className="text-white text-[30px] font-bold leading-tight mt-2 max-w-[70%]">
                  {boxes[1]?.fields.title}
                </h3>
                {boxes[1]?.fields.subtitle && (
                  <p className="text-gray-300 text-sm">
                    {boxes[1]?.fields.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Second box with button-grid background */}
          <div style={borderStyle}>
            <div className="rounded-xl h-[260px] relative overflow-hidden bg-[#10132E]">
              {/* Buttons on the right side */}
              <div className="absolute top-0 right-0 gap-4 h-full flex">
                {/* First column (shifted up) */}
                <div className="flex flex-col -mt-6 gap-2">
                  {["React", "Next.js", "JavaScript"].map((label, i) => (
                    <button
                      key={i}
                      className="bg-[#161b47] text-white text-[13px] font-semibold rounded-[7px] flex items-center justify-center"
                      style={{
                        width: "140.17px",
                        height: "88.35px",
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Second column (normal, with one cropped button) */}
                <div className="flex flex-col gap-2 overflow-hidden">
                  {["Tailwind", "Contentful", "Node.js"].map((label, i) => (
                    <button
                      key={i}
                      className="bg-[#161b47] text-white text-[13px] font-semibold rounded-[7px] flex items-center justify-center"
                      style={{
                        width: "140.17px",
                        height: "88.35px",
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Overlay text (title + subtitle) */}
              <div className="absolute inset-0 flex flex-col items-start justify-center p-4 text-left bg-black/30">
                {boxes[2]?.fields.subtitle && (
                  <p className="text-gray-300 text-[14px] z-10">
                    {boxes[2]?.fields.subtitle}
                  </p>
                )}
                <h3 className="text-white text-[32px] font-bold z-10">
                  {boxes[2]?.fields.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
          {[boxes[3], boxes[4]].map((box, idx) => {
            const isGridBox = idx === 0;
            const isCopyBox = idx === 1;

            return (
              <div key={idx} style={borderStyle}>
                <div
                  className={`h-[260px] relative flex ${
                    isCopyBox
                      ? "items-center justify-center text-center rounded-[7px]"
                      : isGridBox
                      ? "items-start justify-start rounded-xl bg-cover bg-center"
                      : "items-center justify-center rounded-xl bg-cover bg-center"
                  }`}
                  style={{
                    backgroundImage: isCopyBox
                      ? `linear-gradient(to right, rgba(4, 9, 31, 0) 45%, #06091F 100%), url(${box?.fields.backgroundImage.fields.file.url})`
                      : `url(${box?.fields?.backgroundImage?.fields?.file?.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Grid overlay for 3rd box only */}
                  {isGridBox && (
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    ></div>
                  )}

                  <div className={`p-4 ${isGridBox ? "w-full text-left" : ""}`}>
                    <h3
                      className={`${
                        isCopyBox
                          ? "text-white font-bold text-[22px]"
                          : isGridBox
                          ? "text-white font-bold text-[22px]"
                          : "text-white text-lg font-medium"
                      }`}
                    >
                      {box?.fields.title}
                    </h3>
                    {box?.fields.subtitle && (
                      <p
                        onClick={handleCopy}
                        className={`${
                          isCopyBox
                            ? "text-white font-medium mt-2 cursor-pointer flex items-center justify-center gap-2 border border-gray-700 rounded-sm py-2"
                            : "text-gray-300 text-sm"
                        }`}
                      >
                        {copied ? "Copied!" : box?.fields.subtitle}
                        {isCopyBox && !copied && (
                          <FiCopy className="inline-block" />
                        )}
                      </p>
                    )}
                  </div>

                  {isGridBox && (
                    <div
                      className="absolute bottom-0 right-4 rounded-tl-lg rounded-tr-lg overflow-hidden bg-white/7"
                      style={{
                        width: "230px",
                        height: "150px",
                      }}
                    >
                      <div className="p-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full shimmer"></div>

                          <div className="flex flex-col gap-2">
                            <div className="w-20 h-3 rounded-md shimmer"></div>
                            <div className="w-12 h-3 rounded-md shimmer"></div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-2">
                          <div className="w-full h-3 rounded-md shimmer"></div>
                          <div className="w-3/4 h-3 rounded-md shimmer"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-span-12 md:col-span-9">
          <div style={borderStyle}>
            <div
              className="rounded-xl w-full h-[541px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${boxes[5]?.fields.backgroundImage.fields.file.url})`,
              }}
            >
              <div className="absolute inset-0 bg-black/25 flex flex-col items-start justify-center p-4 text-left">
                {boxes[5]?.fields.subtitle && (
                  <p className="text-gray-300 text-[18px] z-10 uppercase">
                    {boxes[5]?.fields.subtitle}
                  </p>
                )}
                <h3 className="text-white text-[36px] font-bold leading-snug max-w-[40%]">
                  {boxes[5]?.fields.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
