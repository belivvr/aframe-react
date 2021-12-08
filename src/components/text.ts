import type {
  Shader,
  TextAlign,
  TextAnchor,
  TextBaseline,
  TextSide,
  TextWhiteSpace,
} from './types';

type TextKeys = 'align'
| 'alphaTest'
| 'anchor'
| 'baseline'
| 'color'
| 'font'
| 'fontImage'
| 'height'
| 'letterSpacing'
| 'lineHeight'
| 'negate'
| 'opacity'
| 'shader'
| 'side'
| 'tabSize'
| 'transparent'
| 'value'
| 'whiteSpace'
| 'width'
| 'wrapCount'
| 'wrapPixels'
| 'xOffset'
| 'yOffset'
| 'zOffset';

/**
 * The text component renders signed distance field (SDF) font text.
 *
 * ![Example Image](https://cloud.githubusercontent.com/assets/674727/22357731/f704544a-e3ee-11e6-8e6e-96c3c4e84958.png)
 *
 * @see https://aframe.io/docs/1.2.0/components/text.html
 */
export interface TextProps {
  /**
   * Multi-line text alignment (left, center, right).
   */
  align?: TextAlign;

  /**
   * Discard text pixels if alpha is less than this value.
   */
  alphaTest?: number;

  /**
   * Horizontal positioning (left, center, right, align).
   */
  anchor?: TextAnchor;

  /**
   * Vertical positioning (top, center, bottom).
   */
  baseline?: TextBaseline;

  /**
   * Text color.
   */
  color?: string;

  /**
   * Font to render text, either the name of one of [A-Frame’s stock fonts](https://aframe.io/docs/1.2.0/components/text.html#stock-fonts) or a URL to a font file
   */
  font?: string;

  /**
   * Font image texture path to render text.
   * Defaults to the font‘s name with extension replaced to `.png`.
   * Don’t need to specify if using a stock font.
   */
  fontImage?: string;

  /**
   * Height of text block.
   */
  height?: number;

  /**
   * Letter spacing in pixels.
   */
  letterSpacing?: number;

  /**
   * Line height in pixels.
   */
  lineHeight?: number;

  negate?: true;

  /**
   * Opacity, on a scale from 0 to 1, where 0 means fully transparent and 1 means fully opaque.
   */
  opacity?: number;

  /**
   * Shader used to render text.
   */
  shader?: Shader;

  /**
   * Side to render. (front, back, double)
   */
  side?: TextSide;

  /**
   * Tab size in spaces.
   */
  tabSize?: number;

  /**
   * Whether text is transparent.
   */
  transparent?: boolean;

  /**
   * The actual content of the text. Line breaks and tabs are supported with \n and \t.
   */
  value?: string;

  /**
   * How whitespace should be handled (i.e., normal, pre, nowrap).
   * [Read more about whitespace](https://github.com/mattdesl/word-wrapper).
   */
  whiteSpace?: TextWhiteSpace;

  /**
   * Width in meters.
   */
  width?: number;

  /**
   * Number of characters before wrapping text (more or less).
   */
  wrapCount?: number;

  /**
   * Number of pixels before wrapping text.
   */
  wrapPixels?: number;

  /**
   * X-offset to apply to add padding.
   */
  xOffset?: number;

  yOffset?: number;

  /**
   * Z-offset to apply to avoid Z-fighting if using with a geometry as a background.
   */
  zOffset?: number;
}

export class Text implements TextProps {
  readonly align?: TextAlign;

  readonly alphaTest?: number;

  readonly anchor?: TextAnchor;

  readonly baseline?: TextBaseline;

  readonly color?: string;

  readonly font?: string;

  readonly fontImage?: string;

  readonly height?: number;

  readonly letterSpacing?: number;

  readonly lineHeight?: number;

  readonly negate?: true;

  readonly opacity?: number;

  readonly shader?: Shader;

  readonly side?: TextSide;

  readonly tabSize?: number;

  readonly transparent?: boolean;

  readonly value?: string;

  readonly whiteSpace?: TextWhiteSpace;

  readonly width?: number;

  readonly wrapCount?: number;

  readonly wrapPixels?: number;

  readonly xOffset?: number;

  readonly yOffset?: number;

  readonly zOffset?: number;

  constructor({
    align,
    alphaTest,
    anchor,
    baseline,
    color,
    font,
    fontImage,
    height,
    letterSpacing,
    lineHeight,
    negate,
    opacity,
    shader,
    side,
    tabSize,
    transparent,
    value,
    whiteSpace,
    width,
    wrapCount,
    wrapPixels,
    xOffset,
    yOffset,
    zOffset,
  }: TextProps) {
    this.align = align;
    this.alphaTest = alphaTest;
    this.anchor = anchor;
    this.baseline = baseline;
    this.color = color;
    this.font = font;
    this.fontImage = fontImage;
    this.height = height;
    this.letterSpacing = letterSpacing;
    this.lineHeight = lineHeight;
    this.negate = negate;
    this.opacity = opacity;
    this.shader = shader;
    this.side = side;
    this.tabSize = tabSize;
    this.transparent = transparent;
    this.value = value;
    this.whiteSpace = whiteSpace;
    this.width = width;
    this.wrapCount = wrapCount;
    this.wrapPixels = wrapPixels;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.zOffset = zOffset;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as TextKeys] !== undefined && this[key as TextKeys] !== '')
    .map((key: string) => `${key}:${this[key as TextKeys]};`)
    .join('');
}
