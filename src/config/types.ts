export type SourceType =
  | "doi"
  | "publisher"
  | "ieee"
  | "crossref"
  | "openalex"
  | "orcid"
  | "scopus"
  | "google-scholar"
  | "researcherid"
  | "vidwan"
  | "institutional"
  | "patent-office"
  | "cv";

export type ExternalSource = {
  label: string;
  url: string;
  type?: SourceType;
  verified: boolean;
};

export type Verification = {
  type: SourceType;
  url: string | null;
  verified: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  visible: boolean;
};

export type ProfileLink = {
  label: string;
  url: string;
  type: "academic" | "institutional";
  identifier?: string;
  visible: boolean;
  verified: boolean;
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
  featured?: boolean;
  visible?: boolean;
  source: Verification;
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
  url?: string;
  featured?: boolean;
  visible?: boolean;
  source: Verification;
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
  featured?: boolean;
  visible?: boolean;
  source: Verification;
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
  visible?: boolean;
};

export type Experience = {
  position: string;
  institution: string;
  location?: string;
  duration: string;
  description?: string;
  current?: boolean;
  visible?: boolean;
};

export type Supervision = {
  scholar: string;
  thesis: string;
  year: number;
  status: "awarded" | "ongoing";
  visible?: boolean;
};

export type Award = {
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  url?: string;
  featured?: boolean;
  visible?: boolean;
};

export type Fellowship = {
  title: string;
  organization: string;
  date: string;
  description?: string;
  visible?: boolean;
};

export type ProfessionalActivity = {
  activity: string;
  organization?: string;
  date?: string;
  description?: string;
  visible?: boolean;
};

export type Workshop = {
  title: string;
  date: string;
  location?: string;
  sponsor?: string;
  description?: string;
  url?: string;
  visible?: boolean;
};

export type ResearchTheme = {
  title: string;
  description: string;
  featured?: boolean;
  visible?: boolean;
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

export type Cta = {
  label: string;
  href: string;
  visible: boolean;
};

export type HomepageSection = {
  id: string;
  heading: string;
  enabled: boolean;
};

export type PageSeo = {
  title: string;
  description: string;
};
