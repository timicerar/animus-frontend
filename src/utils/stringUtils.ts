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
