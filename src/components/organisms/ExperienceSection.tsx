"use client";

import React, { useState } from "react";
import { ExperienceSectionProps } from "@/types/types";
import Image from "next/image";

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  sectionName,
  experiences,
}) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  if (!experiences || experiences.length === 0) return null;

  return (
    <section
      className="w-full py-12 px-4 sm:px-6 md:px-8 bg-[#070A1B]"
      id="#experience"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-10 sm:mb-12">
          {sectionName.split(" ").map((word, idx, arr) => {
            if (idx >= arr.length - 2) {
              return (
                <span key={idx} className="text-[#CBACF9]">
                  {word}{" "}
                </span>
              );
            }
            return word + " ";
          })}
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full justify-items-center">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIdx === idx;

            // ✅ Safe logo & background
            const bgUrl = exp?.fields?.backgroundImage?.fields?.file?.url
              ? `https:${exp.fields.backgroundImage.fields.file.url}`
              : "/fallback.png";

            return (
              <div
                key={idx}
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className={`cursor-pointer border shadow-lg border-white/10 rounded-xl bg-[#161935] 
              transition-all duration-500 overflow-hidden w-full max-w-[600px] 
              relative group
              ${isExpanded ? "ring-2 ring-[#CBACF9]" : ""}`}
                style={{
                  height: isExpanded ? "auto" : "168px",
                }}
              >
                {/* Hover Glow Corner */}
                {/* Hover Glow Corner */}
                <span className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-[#CBACF9] to-transparent rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></span>

                {/* Top section (background image + info) */}
                <div className="flex items-center gap-4 p-6 group-hover:scale-[1.02] transition-transform duration-300">
                  {/* Left Background Image Box */}
                  <div className="flex-shrink-0 w-[94px] h-[87px] flex items-center justify-center">
                    <Image
                      src={bgUrl}
                      alt={exp.fields.backgroundImage?.fields?.title || "Logo"}
                      width={94}
                      height={87}
                      className="object-contain w-[94px] h-[87px]"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {exp.fields.role}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {exp.fields.company}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {exp.fields.workingDate}
                    </p>
                  </div>
                </div>

                {/* Expandable Section */}
                <div
                  className={`transition-all duration-500 bg-[#1F2235] px-6 ${
                    isExpanded ? "py-6 opacity-100" : "max-h-0 py-0 opacity-0"
                  }`}
                  style={{
                    overflow: "hidden",
                    maxHeight: isExpanded ? "1000px" : "0px", // big enough to fit your content
                  }}
                >
                  {/* Company logo */}
                  <div className="flex items-center mb-4">
                    {exp.fields.companyLogo?.fields?.file?.url && (
                      <Image
                        src={`https:${exp.fields.companyLogo.fields.file.url}`}
                        alt={
                          exp.fields.companyLogo.fields.title || "Company logo"
                        }
                        width={40}
                        height={40}
                        className="object-contain w-10 h-10"
                      />
                    )}
                  </div>

                  {/* Long Description */}
                  <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
                    <ul className="list-disc list-outside pl-6 space-y-2 text-gray-300">
                      {(exp.fields.longDescription || "")
                        .split("\n")
                        .map((line, idx) => {
                          if (line.trim().startsWith("-")) {
                            return (
                              <li key={idx} className="leading-relaxed">
                                {line.replace(/^- /, "").trim()}
                              </li>
                            );
                          }
                          if (line.trim().length > 0) {
                            return (
                              <p key={idx} className="leading-relaxed">
                                {line.trim()}
                              </p>
                            );
                          }
                          return null;
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
