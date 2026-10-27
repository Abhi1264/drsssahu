export type ExternalSource = {
  label: string;
  url: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ProfileLink = {
  label: string;
  url: string;
  type: "academic" | "institutional" | "social";
  identifier?: string;
};

export type HighlightWork = {
  title: string;
  subtitle: string;
  year: string;
  metric: string;
  description: string;
  url: string;
  image?: string;
};

export type PublicationType = "journal" | "conference" | "book-chapter";

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationType;
  volume?: string;
  issue?: string;
  pages?: string;
  articleNumber?: string;
  doi?: string;
  isbn?: string;
  issn?: string;
  indexing?: string;
  bookTitle?: string;
  publisher?: string;
  month?: string;
  notes?: string;
  abstract?: string;
  citations?: number;
  featured?: boolean;
  sources?: ExternalSource[];
};

export type Project = {
  title: string;
  fundingBody: string;
  duration: string;
  amount: string;
  role: string;
  status: "completed" | "ongoing";
  description?: string;
  image?: string;
  url?: string;
  featured?: boolean;
};

export type PatentStatus = "granted" | "published" | "application";

export type Patent = {
  title: string;
  status: PatentStatus;
  country: string;
  kind: "patent" | "design";
  patentNumber?: string;
  applicationNumber?: string;
  publicationNumber?: string;
  date?: string;
  inventors?: string[];
  description?: string;
  featured?: boolean;
  sources?: ExternalSource[];
};

export type Education = {
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  major?: string;
  dissertation?: string;
  description?: string;
};

export type Experience = {
  position: string;
  institution: string;
  location?: string;
  duration: string;
  description?: string;
  current?: boolean;
};

export type Supervision = {
  scholar: string;
  thesis: string;
  year: number;
  status: "awarded" | "ongoing";
  description?: string;
};

export type Award = {
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  url?: string;
  featured?: boolean;
};

export type Fellowship = {
  title: string;
  organization: string;
  date: string;
  description?: string;
};

export type ProfessionalActivity = {
  activity: string;
  organization?: string;
  date?: string;
  description?: string;
};

export type Workshop = {
  title: string;
  date: string;
  location?: string;
  sponsor?: string;
  description?: string;
  url?: string;
};

export type ResearchTheme = {
  title: string;
  description: string;
  image?: string;
  methods?: string[];
  featured?: boolean;
};

export type EmailAddress = {
  address: string;
  label: string;
  primary?: boolean;
};

export type PhoneNumber = {
  number: string;
  label: string;
  href: string;
};

export type PageSeo = {
  title: string;
  description: string;
};
