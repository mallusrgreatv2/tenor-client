import { TenorLocale } from "./enums.js";
import { TenorCategoryObject, TenorResponseObject } from "./objects.js";

export interface TenorSearchAPIResponse {
  /**
   * A position identifier to use with the next API query, through the position field, to retrieve the next set of results.
   * If there are no further results, next returns an empty string.
   */
  next: string;
  results: TenorResponseObject[];
}
export type TenorFeaturedAPIResponse = TenorSearchAPIResponse;
export interface TenorCategoriesAPIResponse {
  tags: TenorCategoryObject[];
}
export interface TenorSearchSuggestionsAPIResponse {
  locale: TenorLocale;
  /**
   * An array of suggested search terms
   */
  results: string[];
}
export type TenorAutocompleteAPIResponse = TenorSearchSuggestionsAPIResponse;
export interface TenorTrendingTermsAPIResponse {
  locale: TenorLocale;
  /**
   * An array of suggested search terms. The terms are sorted by their Trending Rank.
   */
  results: string[];
}
export interface TenorPostsAPIResponse {
  locale: TenorLocale;
  /**
   * An array of Response Objects that correspond to those passed in the ids list.
   */
  results: TenorResponseObject[];
}
