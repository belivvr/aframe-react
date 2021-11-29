/**
 * The position component places entities at certain spots in 3D space.
 * Position takes a coordinate value as three space-delimited numbers.
 *
 * All entities inherently have the position component.
 *
 * @see https://aframe.io/docs/1.2.0/components/position.html
 */
export interface PositionProps {
  /**
   * Negative X axis extends left. Positive X Axis extends right.
   */
  x?: number;

  /**
   * Negative Y axis extends down. Positive Y Axis extends up.
   */
  y?: number;

  /**
   * Negative Z axis extends in. Positive Z Axis extends out.
   */
  z?: number;
}

export class Position implements PositionProps {
  readonly x: number;

  readonly y: number;

  readonly z: number;

  constructor({
    x = 0,
    y = 0,
    z = 0,
  }: PositionProps) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public toString = () => `${this.x} ${this.y} ${this.z}`;
}
