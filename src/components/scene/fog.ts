export type FogType = 'linear' | 'exponential';

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
  readonly color: string;

  readonly density: number;

  readonly far: number;

  readonly near: number;

  readonly type: FogType;

  constructor({
    color = '#000',
    density = 0.00025,
    far = 1000,
    near = 1,
    type = 'linear',
  }: FogProps) {
    this.color = color;
    this.density = density;
    this.far = far;
    this.near = near;
    this.type = type;
  }

  public toString = (): string => `color:${this.color};`
                                + `density:${this.density};`
                                + `far:${this.far};`
                                + `near:${this.near};`
                                + `type:${this.type};`;
}
