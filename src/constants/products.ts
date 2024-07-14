export const Products = {
  ANIMUS_PART_1: 'animus_part_1',
  ANIMUS_PART_2: 'animus_part_2',
  ANIMUS_PART_3: 'animus_part_3',
} as const;

export type Product = (typeof Products)[keyof typeof Products];
