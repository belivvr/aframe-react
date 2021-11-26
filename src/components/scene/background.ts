/**
 * The background component sets a basic color background of a scene that
 * is more performant than `a-sky` since geometry is not created.
 * There are no undesired frustum culling issues when `a-sky` is further than
 * the far plane of the camera. There are no unexpected occlusions either with
 * far objects that might be behind of the sphere geometry of `a-sky`.
 *
 * @see https://aframe.io/docs/1.2.0/components/background.html
 */
export interface BackgroundProps {
  /**
   * Color of the scene background.
   */
  color?: string;

  /**
   * Background is transparent. The color property is ignored.
   */
  transparent?: boolean;
}

export class Background implements BackgroundProps {
  readonly color: string;

  readonly transparent: boolean;

  constructor({
    color = 'black',
    transparent = false,
  }: BackgroundProps) {
    this.color = color;
    this.transparent = transparent;
  }

  public toString = (): string => `color:${this.color};`
                                + `transparent:${this.transparent};`;
}
