export const Sections = {
  FIND_OUT_SECTION_ID: 'findOutSectionId',
  READ_SECTION_ID: 'readSectionId',
  ILLUSTRATIONS_SECTION_ID: 'illustrationsSectionId',
} as const;

export type Section = (typeof Sections)[keyof typeof Sections];
