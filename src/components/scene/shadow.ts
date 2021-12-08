import { ShadowType } from './types';

type ShadowKeys = 'type';

export interface ShadowProps {
  /**
   * Defines shadow map type (`basic`, `pcf`, `pcfsoft`)
   * with varying appearance and performance characteristics.
   */
  type?: ShadowType;
}

export class Shadow implements ShadowProps {
  readonly type?: ShadowType;

  constructor({ type }: ShadowProps) {
    this.type = type;
  }

  public toString = (): string => Object.keys(this)
    .filter((key: string) => key !== 'toString')
    .filter((key: string) => this[key as ShadowKeys] !== undefined)
    .map((key: string) => `${key}:${this[key as ShadowKeys]};`)
    .join('');
}
