import Component from '../Component';

/**
 * The screenshot component lets us take different types of screenshots with keyboard shortcuts.
 * A-Frame attaches this component to the scene by default
 * so we don’t have to do anything to use the component.
 *
 * @see https://aframe.io/docs/1.3.0/components/screenshot.html
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

export class Screenshot extends Component<ScreenshotProps> {
  readonly width?: number;

  readonly height?: number;
}
