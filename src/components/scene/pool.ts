export interface PoolProps {
  container?: string;
  mixin?: string;
  size?: number;
  dynamic?: boolean;
}

export class Pool implements PoolProps {
  readonly container: string;

  readonly mixin: string;

  readonly size: number;

  readonly dynamic: boolean;

  constructor({
    container = '',
    mixin = '',
    size = 0,
    dynamic = false,
  }: PoolProps) {
    this.container = container;
    this.mixin = mixin;
    this.size = size;
    this.dynamic = dynamic;
  }

  public toString = (): string => `container:${this.container};`
                                + `mixin:${this.mixin};`
                                + `size:${this.size};`
                                + `dynamic:${this.dynamic};`;
}
