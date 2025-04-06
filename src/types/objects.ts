import { TenorContentFormat, TenorMediaFlag } from "./types.js";

export interface TenorMediaObject {
  /** A URL to the media source */
  url: string;
  /** Width and height of the media in pixels */
  dimensions: number[];
  /**
   * Represents the time in seconds for one loop of the content.
   * If the content is static, the duration is set to 0.
   */
  duration: number;
  /** Size of the file in bytes */
  size: number;
}
export interface TenorResponseObject {
  /** A Unix timestamp that represents when this post was created. */
  created: number;
  /**
   * Returns true if this post contains audio.
   * Note: Only video formats support audio. The GIF image file format can't contain audio information.
   */
  hasaudio: boolean;
  /** Tenor result identifier. */
  id: string;
  /** A dictionary with a content format as the key and a Media Object as the value. */
  media_formats: Record<TenorContentFormat, TenorMediaObject>;
  /** An array of tags for the post */
  tags: string[];
  /** The title of the post */
  title: string;
  /**
   * A textual description of the content.
   * It is recommended to use `content_description` for user accessibility features.
   */
  content_description: string;
  content_description_source?: string;
  /**
   * The full URL to view the post on {@link https://tenor.com tenor.com}.
   */
  itemurl: string;
  /**
   * Returns true if this post contains captions.
   */
  hascaption: boolean;
  /**
   * An array to signify whether the content is a sticker or static image, has audio, or is any combination of these.
   * If sticker and static aren't present, then the content is a GIF.
   * A blank flags field signifies a GIF without audio.
   */
  flags: TenorMediaFlag[];
  /** The most common background pixel color of the content */
  bg_color?: string;
  /** A short URL to view the post on {@link https://tenor.com tenor.com}. */
  url: string;
}
export interface TenorCategoryObject {
  /**
   * The search term that corresponds to the category.
   * The search term is translated to match the locale of the corresponding request.
   */
  searchterm: string;
  /**
   * The search URL to request if the user selects the category
   */
  path: string;
  /**
   * A URL to the media source for the category's example GIF
   */
  image: string;
  /**
   * Category name to overlay over the image. The name is translated to match the locale of the corresponding request.
   */
  name: string;
}
