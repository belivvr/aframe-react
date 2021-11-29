import type { Vec3 } from './types';
import { Vec3ToString } from './types';

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
  start?: Vec3;

  /**
   * Start point coordinate.
   */
  end?: Vec3;

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
  readonly start: Vec3;

  readonly end: Vec3;

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

  public toString = (): string => `start:${Vec3ToString(this.start)};`
                                + `end:${Vec3ToString(this.end)};`
                                + `color:${this.color};`
                                + `opacity:${this.opacity};`
                                + `visible:${this.visible};`;
}
