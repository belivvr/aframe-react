export interface Vec3Props {
  x: number;
  y: number;
  z: number;
}

export class Vec3 {
  readonly x: number;

  readonly y: number;

  readonly z: number;

  constructor({ x, y, z }: Vec3Props) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public toString = () => `${this.x} ${this.y} ${this.z}`;
}
