export const HASH_REGEXP = /#.*$/u;

/**
 * Get hash from path
 *
 * @param path link path
 * @returns hash
 */
export const getHash = (path: string): string => {
  const match = HASH_REGEXP.exec(path);

  if (match) return match[0];

  return '';
};

/**
 * @description get not have query and hash url
 * @example
 * @returns
 */
export const getPureUrl = () => {
  const { origin, pathname } = location;
  return origin + pathname;
};
