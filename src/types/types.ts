export interface ContentType {
  fields: {
    slug: string;
    sectionName: string;
    componentType: string;
  };
}

export interface PageProps {
  pageName?: string;
  pageTitle?: string;
  slug?: string;
  sections?: ContentType[];
  sectionList?: ContentType[];
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export interface HeroSectionProps {
  sectionName: string;
  header: string;
  description: string;
  componentType: string;
  button?: string;
  buttonUrl?: string;
  slug?: string;
  scrollToSection?: (key: string) => void;
  sectionList?: ContentType[];
}

export interface Box {
  fields: {
    title: string;
    subtitle?: string;
    backgroundImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export interface AboutSectionProps {
  sectionName?: string;
  componentType?: string;
  boxes: Box[];
  slug?: string;
}

export interface TechStack {
  fields: {
    techName: string;
    techImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export interface Project {
  fields: {
    backgroundImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    header: string;
    description?: string;
    button: string;
    buttonUrl: string;
    slug: string;
    techStacks: TechStack[];
  };
}

export interface ProjectSectionProps {
  sectionName: string;
  componentType?: string;
  projects: Project[];
  slug?: string;
}

export interface ApproachCard {
  fields: {
    header: string;
    subtitle: string;
    description: string;
  };
}

export interface ApproachSectionProps {
  sectionName: string;
  componentType?: string;
  myApproachCards: ApproachCard[];
  slug?: string;
}

export interface TechImage {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface SocialIcon {
  fields: {
    techName: string;
    techImage: TechImage;
  };
}

export interface FooterSectionProps {
  sectionName: string;
  componentType: string;
  header: string;
  subtitle: string;
  description: string;
  socialIcons: SocialIcon[];
  button: string;
  buttonUrl: string;
  slug: string;
}

export interface ExperienceLocation {
  lat: number;
  lon: number;
}

export interface ExperienceItem {
  fields: {
    role: string;
    company: string;
    workingDate: string;
    subtitle: string;
    longDescription: string;
    location: ExperienceLocation;
    companyLogo?: TechImage;
    backgroundImage?: TechImage;
  };
}

export interface ExperienceSectionProps {
  sectionName: string;
  componentType: string;
  experiences: ExperienceItem[];
  slug?: string;
}
