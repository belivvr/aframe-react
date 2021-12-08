import { FogType } from './types';

type FogKeys = 'color'
| 'density'
| 'far'
| 'near'
| 'type';

/**
 * The fog component obscures entities in fog given distance from the camera. The fog component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.2.0/core/scene.html).
 *
 * @see https://aframe.io/docs/1.2.0/components/fog.html
 */
export interface FogProps {
  /**
   * Color of fog. For example, if set to black, far away objects will be rendered black.
   */
  color?: string;

  /**
   * How quickly the fog grows dense.
   */
  density?: number;

  /**
   * Maximum distance to stop applying fog. Objects farther than this won’t be affected by fog.
   *
   * min: 0
   */
  far?: number;

  /**
   * Minimum distance to start applying fog. Objects closer than this won’t be affected by fog.
   *
   * min: 0
   */
  near?: number;

  /**
   * Type of fog distribution. Can be `linear` or `exponential`.
   */
  type?: FogType;
}

export class Fog implements FogProps {
  readonly color?: string;

  readonly density?: number;

  readonly far?: number;

  readonly near?: number;

  readonly type?: FogType;

  constructor({
    color,
    density,
    far,
    near,
    type,
  }: FogProps) {
    this.color = color;
    this.density = density;
    this.far = far;
    this.near = near;
    this.type = type;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as FogKeys] !== undefined && this[key as FogKeys] !== '')
    .map((key: string) => `${key}:${this[key as FogKeys]};`)
    .join('');
}
