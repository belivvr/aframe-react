/**
 * The rotation component defines the orientation of an entity in degrees.
 * It takes the pitch (x), yaw (y), and roll (z) as three space-delimited numbers
 * indicating degrees of rotation.
 *
 * All entities inherently have the rotation component.
 *
 * @see https://aframe.io/docs/1.2.0/components/rotation.html
 */
export interface RotationProps {
  /**
   * Pitch, rotation about the X-axis.
   */
  x?: number;

  /**
   * Yaw, rotation about the Y-axis.
   */
  y?: number;

  /**
   * Roll, rotation about the Z-axis.
   */
  z?: number;
}

export class Rotation implements RotationProps {
  readonly x: number;

  readonly y: number;

  readonly z: number;

  constructor({
    x = 0,
    y = 0,
    z = 0,
  }: RotationProps) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public toString = () => `${this.x} ${this.y} ${this.z}`;
}
