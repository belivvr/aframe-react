import Component from './Component';
import type { Vec3Props } from './types';

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

export class Line extends Component<LineProps> {
  readonly start?: Vec3Props;

  readonly end?: Vec3Props;

  readonly color?: string;

  readonly opacity?: number;

  readonly visible?: boolean;
}
