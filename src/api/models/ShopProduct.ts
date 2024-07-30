import { StaticImageData } from 'next/image';
import { CurrencyType } from '@/api/models/PayPal';
import { ShopRoute } from '@/constants/routes';

export const BookIds = {
  ANIMUS_TRILOGY: 'animus-trilogy',
  ANIMUS_PART_1: 'animus-part-one',
  ANIMUS_PART_2: 'animus-part-two',
  ANIMUS_PART_3: 'animus-part-three',
} as const;

export type BookId = (typeof BookIds)[keyof typeof BookIds];

export type ShopProduct = {
  bookId: BookId;
  href: ShopRoute;
  image: StaticImageData;
  title: string;
  payPalTitle: string;
  description?: string;
  caption?: string;
  reverseCaption?: boolean;
  price: number;
  discountPrice?: number;
  currency: CurrencyType;
};
