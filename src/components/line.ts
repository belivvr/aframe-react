import type { Vec3Props } from './types';
import { Vec3 } from './types';

/**
 * The line component draws a line given a start coordinate and end coordinate using [THREE.Line](https://threejs.org/docs/#api/objects/Line).
 *
 * The [raycaster component](https://aframe.io/docs/1.2.0/components/raycaster.html) uses the line component for its showLine property,
 * which is then used by the [laser-controls component](https://aframe.io/docs/1.2.0/components/laser-controls.html).
 *
 * @see https://aframe.io/docs/1.2.0/components/line.html
 */
export interface LineProps {
  /**
   * Start point coordinate.
   */
  start?: Vec3Props;

  /**
   * Start point coordinate.
   */
  end?: Vec3Props;

  /**
   * Line color.
   */
  color?: string;

  /**
   * Line opacity.
   */
  opacity?: number;

  /**
   * Whether the material visible.
   */
  visible?: boolean;
}

export class Line implements LineProps {
  readonly start: Vec3Props;

  readonly end: Vec3Props;

  readonly color: string;

  readonly opacity: number;

  readonly visible: boolean;

  constructor({
    start = { x: 0, y: 0, z: 0 },
    end = { x: 0, y: 0, z: 0 },
    color = '#74BEC1',
    opacity = 1,
    visible = true,
  }: LineProps) {
    this.start = start;
    this.end = end;
    this.color = color;
    this.opacity = opacity;
    this.visible = visible;
  }

  public toString = (): string => `start:${new Vec3(this.start).toString()};`
                                + `end:${new Vec3(this.end).toString()};`
                                + `color:${this.color};`
                                + `opacity:${this.opacity};`
                                + `visible:${this.visible};`;
}
