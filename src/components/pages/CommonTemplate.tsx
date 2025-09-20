"use client";

import React, { useMemo, createRef } from "react";
import { ContentType, PageProps } from "../../types/types";
import { componentTypes } from "../../types/componentTypes";

const CommonTemplate: React.FC<PageProps> = ({
  sections,
  slug,
  sectionList,
}) => {
  const listItem = sections || sectionList;

  // ✅ Create refs for each section
  const sectionRefs = useMemo(() => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {};
    listItem?.forEach((item) => {
      const key = item?.fields?.componentType || "";
      if (key) refs[key] = createRef<HTMLDivElement>();
    });
    return refs;
  }, [listItem]);

  // ✅ Scroll function
  const scrollToSection = (key: string) => {
    const ref = sectionRefs[key];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!listItem) return <div>No sections available</div>;

  return (
    <div>
      {listItem.map((item: ContentType, index: number) => {
        const Component = componentTypes[item?.fields?.componentType || ""];
        const key = item?.fields?.componentType || "";

        if (!Component) return <div key={index}>Unknown component type</div>;

        // ✅ Only HeroSection gets scrollToSection and sectionList
        const extraProps =
          key === "HeroSection"
            ? { scrollToSection, sectionList: listItem }
            : {};

        return (
          <div key={key} ref={sectionRefs[key]}>
            <Component {...item.fields} slug={slug} {...extraProps} />
          </div>
        );
      })}
    </div>
  );
};

export default CommonTemplate;
