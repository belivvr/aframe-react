type ScreenshotKeys = 'width' | 'height';

/**
 * The screenshot component lets us take different types of screenshots with keyboard shortcuts.
 * A-Frame attaches this component to the scene by default
 * so we don’t have to do anything to use the component.
 *
 * @see https://aframe.io/docs/1.2.0/components/screenshot.html
 */
export interface ScreenshotProps {
  /**
   * The width in pixels of the screenshot taken.
   */
  width?: number;

  /**
   * The height in pixels of the screenshot taken.
   */
  height?: number;
}

export class Screenshot implements ScreenshotProps {
  readonly width?: number;

  readonly height?: number;

  constructor({
    width,
    height,
  }: ScreenshotProps) {
    this.width = width;
    this.height = height;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as ScreenshotKeys] !== undefined)
    .map((key: string) => `${key}:${this[key as ScreenshotKeys]};`)
    .join('');
}
