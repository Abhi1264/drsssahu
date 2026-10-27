import type { ImageMetadata } from "astro";
import bitMesra from "../assets/logos/bit-mesra.png";
import iitBhubaneswar from "../assets/logos/iit-bhubaneswar.png";
import biomedical from "../assets/research/biomedical-neuro-photonics.jpg";
import cps from "../assets/research/cyber-physical-edge-ai.jpg";
import genomic from "../assets/research/genomic-vlsi-dsp.jpg";
import security from "../assets/research/image-security-vision.jpg";
import speech from "../assets/research/parkinsons-speech-ai.jpg";
import protein from "../assets/research/protein-interactome.jpg";

const institutionLogos: Record<string, ImageMetadata> = {
  "Birla Institute of Technology Mesra": bitMesra,
  "Indian Institute of Technology Bhubaneswar": iitBhubaneswar,
};

const researchImages: Record<string, ImageMetadata> = {
  speech,
  biomedical,
  protein,
  genomic,
  security,
  cps,
};

export function institutionLogo(name: string): ImageMetadata | undefined {
  return institutionLogos[name];
}

export function researchImage(key?: string): ImageMetadata | undefined {
  return key ? researchImages[key] : undefined;
}
