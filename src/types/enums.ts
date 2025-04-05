export type TenorCategoryType = "featured" | "trending";
/** Two-letter {@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements ISO 3166-1 alpha-2 country code}. */
export type TenorCountry = `${string}${string}`;
/**
 * First two letters should be the two-letter language code according to {@link https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes#Table ISO 639}
 * Last two letters should be the two-letter {@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements ISO 3166-1 alpha-2 country code}.
 * The country code and language code should be separated by a hyphen (-)
 */
export type TenorLocale = `${string}${string}-${TenorCountry}`;
/** The content safety level. */
export type TenorContentFilter = "off" | "low" | "medium" | "high";
export type TenorSearchFilter = "sticker" | "static" | "-static";
export type TenorMediaFlag = "sticker" | "static";
/**
 * Optional, but strongly recomended.
 * List of GIF formats to filter the response objects.
 */
export type TenorMediaFilter =
  | "gif"
  | "tinygif"
  | "mp4"
  | "tinymp4"
  | (string & {});
/**
 * Constraints for aspect ratio of the GIFs returned as the response objects
 * all: no constraints
 * wide: 0.42 <= aspect ratio <= 2.36
 * standard: 0.56 <= aspect ratio <= 1.78
 */
export type TenorAspectRatioRange = "all" | "wide" | "standard";

export type TenorContentFormat =
  | "preview"
  | "gif"
  | "mediumgif"
  | "tinygif"
  | "nanogif"
  | "mp4"
  | "loopedmp4"
  | "tinymp4"
  | "nanomp4"
  | "webm"
  | "tinywebm"
  | "nanowebm"
  | "webp_transparent"
  | "tinywebp_transparent"
  | "nanowebp_transparent"
  | "gif_transparent"
  | "tinygif_transparent"
  | "nanogif_transparent";
