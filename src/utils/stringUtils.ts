import { PriceCurrency } from '@/api/models/PayPal';

/**
 * Custom JSON parse function, which returns null if parsing fails instead of throwing an error.
 * This is useful when parsing cookies, as the cookie value might not be a valid JSON string.
 */
export const jsonParse = <T>(value: unknown) => {
  try {
    return JSON.parse(value as string) as T;
  } catch {
    return null;
  }
};

export const displayPrice = (
  price: number,
  currency: PriceCurrency = 'EUR'
) => {
  switch (currency) {
    case 'EUR':
      return `${price?.toFixed(2)} €`;
    case 'USD':
      return `${price?.toFixed(2)} $`;
    default:
      return `${price?.toFixed(2)} €`;
  }
};
