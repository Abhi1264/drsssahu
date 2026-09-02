import type { ImageMetadata } from "astro";
import bitMesra from "../assets/logos/bit-mesra.png";
import iitBhubaneswar from "../assets/logos/iit-bhubaneswar.png";

const institutionLogos: Record<string, ImageMetadata> = {
  "Birla Institute of Technology Mesra": bitMesra,
  "Indian Institute of Technology Bhubaneswar": iitBhubaneswar,
};

export function institutionLogo(name: string): ImageMetadata | undefined {
  return institutionLogos[name];
}
