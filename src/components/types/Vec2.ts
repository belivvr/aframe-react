export interface Vec2Props {
  x: number;
  y: number;
}

export class Vec2 {
  readonly x: number;

  readonly y: number;

  constructor({ x, y }: Vec2Props) {
    this.x = x;
    this.y = y;
  }

  public toString = () => `${this.x} ${this.y}`;
}
