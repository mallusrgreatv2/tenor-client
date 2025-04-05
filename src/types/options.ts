import {
  TenorAspectRatioRange,
  TenorCategoryType,
  TenorContentFilter,
  TenorMediaFilter,
  TenorSearchFilter,
} from "./enums.js";

export interface TenorClientOptions {
  /**
   * The API key from Google developer console.
   * @see https://developers.google.com/tenor/guides/quickstart
   */
  apiKey: string;
  /**
   * Optional, but strongly recommended.
   * The client ID from Google developer console.
   * @see https://console.cloud.google.com
   */
  clientID?: string;
}
export interface TenorSearchOptions {
  /**
   * The query search string.
   * Recommended to pass unmodified from the user.
   */
  query: string;
  /**
   * Array of non-GIF content types to filter the {@link TenorResponseObject Response Objects}.
   * sticker returns both static and animated sticker content.
   * sticker and -static returns only animated sticker content.
   * sticker and static returns only static sticker content.
   * If you only want GIF content, leave an empty array or remove this option.
   */
  searchFilters?: TenorSearchFilter[];
  /**
   * Optional, but strongly recommended.
   * Country of origin for the request. Two-letter {@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements ISO 3166-1 alpha-2 country code}.
   * @default "US"
   */
  country?: `${string}${string}`;
  /**
   * Optional, but strongly recommended.
   * Default language to interpret the query.
   * First two letters should be the two-letter language code according to {@link https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes#Table ISO 639}
   * Last two letters should be the two-letter {@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements ISO 3166-1 alpha-2 country code}.
   * The country code and language code should be separated by a hyphen (-)
   * @default "en-US"
   */
  locale?: `${string}${string}-${string}${string}`;
  /**
   * Optional, but strongly recommended.
   * The content safety level.
   * @default "low"
   */
  contentFilter?: TenorContentFilter;
  /**
   * Optional, but strongly recomended.
   * List of GIF formats to filter the response objects.
   * By default, it does no filtering and returns all response objects.
   */
  mediaFilter?: TenorMediaFilter[];
  /**
   * Optional, but strongly recommended.
   * Filter the Response Objects to only include GIFs with aspect ratios that fit within the selected range.
   * @default "all"
   */
  aspectRatioRange?: TenorAspectRatioRange;
  /**
   * Specify whether to randomly order the response. When disabled, it orders the results by Tenor's relevancy ranking.
   * @default false
   */
  random?: boolean;
  /**
   * Fetch up to the specified number of results.
   * Maximum value is 50.
   * @default 20
   */
  limit?: number;
  /**
   * Retrieve results that start at the position "value".
   * Use a non-zero, non-empty value from next, returned by the API response, to get the next set of results.
   * It isn't an index and might be an integer, float, or string.
   */
  position?: string;
}
export type TenorFeaturedOptions = Omit<TenorSearchOptions, "query" | "random">;
export type TenorCategoriesOptions = Pick<
  TenorFeaturedOptions,
  "country" | "locale" | "contentFilter"
> & {
  /**
   * Optional, but strongly recommended.
   * Determines the type of categories returned.
   * @default "featured"
   */
  type: TenorCategoryType;
};
export type TenorSearchSuggestionsOptions = Pick<
  TenorSearchOptions,
  "query" | "country" | "locale" | "limit"
>;
export type TenorAutocompleteOptions = TenorSearchSuggestionsOptions;
export type TenorTrendingTermsOptions = Omit<
  TenorSearchSuggestionsOptions,
  "query"
>;
export type TenorRegisterShareOptions = Omit<
  TenorSearchSuggestionsOptions,
  "limit"
> & {
  /**
   * The id of a Response Object.
   */
  id: string;
  /**
   * Optional, but strongly recommended.
   * The search string that leads to this share.
   */
  query?: string;
};
export type TenorPostsOptions = Pick<TenorFeaturedOptions, "mediaFilter"> & {
  /**
   * A comma-separated list of Response Object IDs.
   */
  ids: string[];
};
