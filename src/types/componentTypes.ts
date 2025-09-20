import AboutSection from "@/components/organisms/AboutSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import FooterSection from "@/components/organisms/Footer";
import HeroSection from "@/components/organisms/HeroSection";
import MyApproachSection from "@/components/organisms/MyApproachSection";
import ProjectSection from "@/components/organisms/ProjectSection";

export const componentTypes: { [key: string]: React.ElementType } = {
  HeroSection: HeroSection,
  AboutSection: AboutSection,
  ProjectSection: ProjectSection,
  ExperienceSection: ExperienceSection,
  ApproachSection: MyApproachSection,
  ContactSection: FooterSection,
};
