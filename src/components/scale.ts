/**
 * The scale component defines a shrinking, stretching, or skewing transformation of an entity.
 * It takes three scaling factors for the X, Y, and Z axes.
 *
 * All entities inherently have the scale component.
 *
 * @see https://aframe.io/docs/1.2.0/components/scale.html
 */
export interface ScaleProps {
  /**
   * Scaling factor in the X direction.
   */
  x?: number;

  /**
   * Scaling factor in the Y direction.
   */
  y?: number;

  /**
   * Scaling factor in the Z direction.
   */
  z?: number;
}

export class Scale implements ScaleProps {
  readonly x: number;

  readonly y: number;

  readonly z: number;

  constructor({
    x = 1,
    y = 1,
    z = 1,
  }: ScaleProps) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public toString = () => `${this.x} ${this.y} ${this.z}`;
}
