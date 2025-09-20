"use client";

import React from "react";
import { ProjectSectionProps } from "@/types/types";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectSection: React.FC<ProjectSectionProps> = ({
  sectionName,
  projects,
}) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#070A1B]" id="projects">
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 text-center">
        {sectionName.split(" ").map((word, idx, arr) => {
          // Color last 2 words in pink
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        {projects.map((project, idx) => {
          const {
            header,
            button,
            buttonUrl,
            techStacks,
            backgroundImage,
            description,
          } = project.fields;

          return (
            <div
              key={idx}
              className="relative rounded-xl flex h-[430px] lg:h-[540px] flex-col border border-white/5"
              style={{
                width: "100%",
                maxWidth: "600px",
                padding: "24px 36px",
                background: "linear-gradient(90deg, #10132E 0%, #1A1B3A 50%)",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                className="rounded-[14px] h-[150px] lg:h-[280px] relative flex items-end justify-start"
                style={{
                  width: "100%",
                  maxWidth: "552px",
                  margin: "0 auto",
                  background:
                    "linear-gradient(135deg, #1A1B3A 0%, #0C0E23 100%)",
                  overflow: "hidden",
                }}
              >
                {backgroundImage?.fields?.file?.url ? (
                  <Image
                    src={
                      backgroundImage.fields.file.url.startsWith("//")
                        ? `https:${backgroundImage.fields.file.url}`
                        : backgroundImage.fields.file.url
                    }
                    alt={header}
                    width={460}
                    height={350}
                    className="absolute rounded-xl left-[20px] lg:left-[40px] w-[230px] lg:w-[460px]"
                    style={{
                      bottom: -21,
                      objectFit: "cover",
                      rotate: "5deg",
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white text-lg">
                    {header}
                  </div>
                )}
              </div>

              <h3 className="text-white font-bold text-xl md:text-3xl mt-4 text-center">
                {header}
              </h3>

              {description && (
                <p className="text-white text-sm lg:text-[16px] mt-2 text-center">
                  {description}
                </p>
              )}

              <div className="mt-auto flex justify-between items-center w-full flex-wrap gap-2">
                {techStacks?.length > 0 && (
                  <div className="flex mt-4">
                    {techStacks.map((tech, tIdx) => {
                      const imageUrl =
                        tech?.fields?.techImage?.fields?.file?.url || null;
                      if (!imageUrl) return null;

                      return (
                        <div
                          key={tIdx}
                          className={`relative w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#04071D] border border-gray-900 flex items-center justify-center cursor-pointer group ${
                            tIdx !== 0 ? "-ml-1.5" : ""
                          }`}
                        >
                          <Image
                            src={
                              imageUrl.startsWith("//")
                                ? `https:${imageUrl}`
                                : imageUrl
                            }
                            alt={tech.fields.techName}
                            width={24}
                            height={24}
                            className="object-contain w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                          />

                          {/* Custom tooltip */}
                          <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                            {tech.fields.techName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {button && buttonUrl && (
                  <a
                    href={buttonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D1ACFF] text-[14px] lg:text-[18px] font-medium flex items-center gap-1 hover:underline"
                  >
                    {button} <FiArrowUpRight className="inline-block" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
