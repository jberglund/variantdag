export const Venues = {
  Trondheim: ["amfiet", "sosialsonen", "kram", "lille", "arbeidssone"],
} as const;

export type VenuesLocationKey = keyof typeof Venues;
export type Venue = (typeof Venues)[VenuesLocationKey][number];
//export type Venue = "amfiet" | "sosialsonen" | "kram" | "lille" | "arbeidssone";
