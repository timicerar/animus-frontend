export const Colors = {
  BLACK: '#000000',
  WHITE: '#ffffff',
  GREEN: '#53B75A',
  RED: '#CE3232',
  BLUE: '#2685DC',
  YELLOW: '#CF9F24',
  GRAY: '#2C2E2F',
} as const;

export type Color = (typeof Colors)[keyof typeof Colors];
