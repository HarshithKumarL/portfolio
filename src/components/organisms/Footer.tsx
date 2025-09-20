"use client";

import React from "react";
import { FooterSectionProps } from "@/types/types";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const FooterSection: React.FC<FooterSectionProps> = ({
  header,
  button,
  buttonUrl,
  description,
  socialIcons,
  subtitle,
}) => {
  return (
    <footer className="relative w-screen h-screen overflow-hidden" id="contact">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, #070A1B 0%, #161A31 100%),
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

      {/* Grid Overlay */}
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12">
        <h1 className="text-[48px] sm:text-[66px] font-bold text-white leading-[1.2] max-w-[90%] sm:max-w-[938px] text-center tracking-[-2px] sm:tracking-[-3.6px]">
          {header.split(" ").map((word, idx) => {
            if (word.toLowerCase() === "your") {
              return (
                <span key={idx} className="text-[#CBACF9]">
                  {word}{" "}
                </span>
              );
            }
            return word + " ";
          })}
        </h1>

        {subtitle && (
          <p className="text-gray-300 text-base sm:text-md max-w-[90%] sm:max-w-xl mt-4">
            {subtitle}
          </p>
        )}

        {button && buttonUrl && (
          <a
            href={buttonUrl}
            className="mt-6 sm:mt-8 flex items-center justify-center font-semibold text-white relative whitespace-nowrap w-full sm:w-[200px] p-[1px] rounded-[14px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(105,113,162,0.3) 0%, rgba(39,42,60,0.2) 100%)",
            }}
          >
            <div
              className="flex items-center justify-center gap-2 text-sm sm:text-base w-full h-[56px] rounded-[14px]"
              style={{
                background:
                  "linear-gradient(to bottom, #161A31 0%, #06091F 100%)",
              }}
            >
              {button}
              <FiArrowUpRight className="text-white" size={18} />
            </div>
          </a>
        )}
      </div>

      {/* Bottom section (responsive layout) */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col sm:flex-row items-center sm:items-end sm:justify-between gap-4 px-6 sm:px-10">
        <p className="text-white text-[14px] text-center sm:text-left">
          {description}
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
          {socialIcons?.map((iconEntry, idx: number) => {
            const { techName, techImage } = iconEntry.fields;
            const imgUrl = `https:${techImage.fields.file.url}`;
            const linkUrl = techImage.fields.description || "#";

            return (
              <a
                key={idx}
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#05041F] border border-white/10 hover:border-[#CBACF9] transition group"
                title={techName}
              >
                <Image
                  src={imgUrl}
                  alt={techName}
                  width={20}
                  height={20}
                  className="object-contain"
                />

                <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {techName}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
