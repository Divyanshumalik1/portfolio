export const palette = {
  violet: { hex: "#8b5cf6", soft: "#c4b5fd" },
  pink: { hex: "#ec4899", soft: "#f9a8d4" },
  cyan: { hex: "#22d3ee", soft: "#a5f3fc" },
  amber: { hex: "#f59e0b", soft: "#fde68a" },
  emerald: { hex: "#10b981", soft: "#6ee7b7" },
  rose: { hex: "#f43f5e", soft: "#fda4af" },
} as const;

export type ColorName = keyof typeof palette;
