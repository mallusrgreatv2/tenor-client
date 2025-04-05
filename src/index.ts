import { request as fetch } from "undici";
import type {
  TenorAutocompleteOptions,
  TenorCategoriesOptions,
  TenorClientOptions,
  TenorFeaturedOptions,
  TenorPostsOptions,
  TenorRegisterShareOptions,
  TenorSearchOptions,
  TenorSearchSuggestionsOptions,
  TenorTrendingTermsOptions,
} from "./types/options.js";
import type {
  TenorAutocompleteAPIResponse,
  TenorCategoriesAPIResponse,
  TenorFeaturedAPIResponse,
  TenorPostsAPIResponse,
  TenorSearchAPIResponse,
  TenorSearchSuggestionsAPIResponse,
  TenorTrendingTermsAPIResponse,
} from "./types/responses.js";
export class TenorClientError extends Error {}
export class TenorClient {
  constructor(private options: TenorClientOptions) {}
  private async request<T, ExpectBody extends boolean = true>(
    url: URL,
    expectsBody: ExpectBody
  ): Promise<ExpectBody extends true ? T : number> {
    url.searchParams.append("key", this.options.apiKey);
    if (this.options.clientID)
      url.searchParams.append("client_key", this.options.clientID);

    const res = await fetch(url.toString());

    if (expectsBody) {
      if (!res.body)
        throw new TenorClientError("Expected a body, but body was nullish.");
      const json = await res.body.json();
      return json as any;
    } else {
      return res.statusCode as any;
    }
  }

  /**
   * Get a JSON object that contains a list of the most relevant GIFs for a given set of search terms, categories, emojis, or any combination of these.
   *
   * When you include sticker in searchFilter, Tenor's search endpoint returns stickers rather than GIFs. The {@link TenorResponseObject Response Objects} in sticker search responses include transparent {@link TenorContentFormat formats} under the mediaFormats field.
   *
   * To return the results in a randomized order, instead of them being ordered by relevance, set the option random to true.
   */
  public search(options: TenorSearchOptions) {
    const url = new URL("https://tenor.googleapis.com/v2/search");
    url.searchParams.append("q", options.query);
    if (options.searchFilters)
      url.searchParams.append("searchfilter", options.searchFilters.join(","));
    if (options.country) url.searchParams.append("country", options.country);
    if (options.locale) url.searchParams.append("locale", options.locale);
    if (options.contentFilter)
      url.searchParams.append("contentfilter", options.contentFilter);
    if (options.mediaFilter)
      url.searchParams.append("media_filter", options.mediaFilter.join(","));
    if (options.aspectRatioRange)
      url.searchParams.append("ar_range", options.aspectRatioRange);
    if (options.random == null)
      url.searchParams.append("random", options.random ? "true" : "false");
    if (options.limit)
      url.searchParams.append("limit", options.limit.toString());
    if (options.position) url.searchParams.append("pos", options.position);
    return this.request<TenorSearchAPIResponse>(url, true);
  }
  /**
   * Get a JSON object that contains a list of the current global featured GIFs. Tenor updates the featured stream regularly throughout the day.
   *
   * When sticker is included in searchFilter, Tenor's Featured endpoint returns stickers rather than GIFs. In sticker featured responses, {@link TenorResponseObject Response Objects} include transparent {@link TenorContentFormat formats} under the media field.
   */
  public featured(options: TenorFeaturedOptions) {
    const url = new URL("https://tenor.googleapis.com/v2/featured");
    if (options.searchFilters)
      url.searchParams.append("searchfilter", options.searchFilters.join(","));
    if (options.country) url.searchParams.append("country", options.country);
    if (options.locale) url.searchParams.append("locale", options.locale);
    if (options.contentFilter)
      url.searchParams.append("contentfilter", options.contentFilter);
    if (options.mediaFilter)
      url.searchParams.append("media_filter", options.mediaFilter.join(","));
    if (options.aspectRatioRange)
      url.searchParams.append("ar_range", options.aspectRatioRange);
    if (options.limit)
      url.searchParams.append("limit", options.limit.toString());
    if (options.position) url.searchParams.append("pos", options.position);
    return this.request<TenorFeaturedAPIResponse>(url, true);
  }
  /**
   * Get a JSON object that contains a list of GIF categories associated with the provided type.
   * Each category includes a corresponding search URL to use if the user clicks on the category.
   * The search URL includes any parameters from the original call to the Categories endpoint.
   */
  public categories(options: TenorCategoriesOptions) {
    const url = new URL("https://tenor.googleapis.com/v2/categories");
    if (options.country) url.searchParams.append("country", options.country);
    if (options.locale) url.searchParams.append("locale", options.locale);
    if (options.contentFilter)
      url.searchParams.append("contentfilter", options.contentFilter);
    if (options.type) url.searchParams.append("type", options.type);
    return this.request<TenorCategoriesAPIResponse>(url, true);
  }
  /**
   * Get a JSON object that contains a list of alternative search terms for a given search term.

   * Search suggestions help a user narrow their search or discover related search terms to find a more precise GIF.
   * The API returns results in order of what is most likely to drive a share for a given term, based on historic user search and share behavior.
   */
  public searchSuggestions(options: TenorSearchSuggestionsOptions) {
    const url = new URL("https://tenor.googleapis.com/v2/search_suggestions");
    url.searchParams.append("q", options.query);
    if (options.country) url.searchParams.append("country", options.country);
    if (options.locale) url.searchParams.append("locale", options.locale);
    if (options.limit)
      url.searchParams.append("limit", options.limit.toString());
    return this.request<TenorSearchSuggestionsAPIResponse>(url, true);
  }
  /**
   * Get a JSON object that contains a list of completed search terms for a given partial search term.
   * The list is sorted by Tenor's AI and the number of results decreases as Tenor's AI becomes more certain.
   */
  public autocomplete(options: TenorAutocompleteOptions) {
    const url = new URL("https://tenor.googleapis.com/v2/autocomplete");
    url.searchParams.append("q", options.query);
    if (options.country) url.searchParams.append("country", options.country);
    if (options.locale) url.searchParams.append("locale", options.locale);
    if (options.limit)
      url.searchParams.append("limit", options.limit.toString());
    return this.request<TenorAutocompleteAPIResponse>(url, true);
  }
  /**
   * Get a JSON object that contains a list of the current trending search terms. Tenor's AI updates the list hourly.
   */
  public trendingSearchTerms(options: TenorTrendingTermsOptions) {
    const url = new URL("https://tenor.googleapis.com/v2/trending_terms");
    if (options.country) url.searchParams.append("country", options.country);
    if (options.locale) url.searchParams.append("locale", options.locale);
    if (options.limit)
      url.searchParams.append("limit", options.limit.toString());
    return this.request<TenorTrendingTermsAPIResponse>(url, true);
  }
  /**
   * Register a user's sharing of a GIF or sticker.
   * @returns HTTP status code of the response. Useless, as it will throw an error if not successful.
   */
  public registerShare(options: TenorRegisterShareOptions) {
    const url = new URL("https://tenor.googleapis.com/v2/trending_terms");
    url.searchParams.append("id", options.id);
    if (options.country) url.searchParams.append("country", options.country);
    if (options.locale) url.searchParams.append("locale", options.locale);
    if (options.query) url.searchParams.append("q", options.query);
    return this.request(url, false);
  }
  /**
   * Get the GIFs, stickers, or a combination of the two for the specified IDs.
   */
  public posts(options: TenorPostsOptions) {
    const url = new URL("https://tenor.googleapis.com/v2/trending_terms");
    url.searchParams.append("ids", options.ids.join(","));
    if (options.mediaFilter)
      url.searchParams.append("media_filter", options.mediaFilter.join(","));
    return this.request<TenorPostsAPIResponse>(url, true);
  }
}
export * from "./types/enums.js";
export * from "./types/objects.js";
export * from "./types/options.js";
export * from "./types/responses.js";
